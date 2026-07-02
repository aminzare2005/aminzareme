const GITHUB_USERNAME = "aminzare2005";
const REVALIDATE_SECONDS = 36000; // 10 hours

export type GitHubStats = {
  followers: number;
  publicRepos: number;
  totalStars: number;
};

const FALLBACK_STATS: GitHubStats = {
  followers: 200,
  publicRepos: 14,
  totalStars: 0,
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    if (!userRes.ok) return FALLBACK_STATS;

    const user = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    let totalStars = 0;
    if (reposRes.ok) {
      const repos = await reposRes.json();
      totalStars = repos.reduce(
        (sum: number, repo: { stargazers_count: number }) =>
          sum + repo.stargazers_count,
        0,
      );
    }

    return {
      followers: user.followers ?? FALLBACK_STATS.followers,
      publicRepos: user.public_repos ?? FALLBACK_STATS.publicRepos,
      totalStars,
    };
  } catch {
    return FALLBACK_STATS;
  }
}
