# Claude Code Agent Configuration for aminzare.me

## Overview

This document outlines the specialized agent configurations and workflows for maintaining and developing Amin Zare's personal portfolio website (aminzare.me). It provides guidance on selecting the appropriate agent for different tasks and describes the available tools and patterns for optimal development workflows.

---

## Available Agents

### claude-code-guide

**Primary Use**: Technical guidance and setup questions
**When to Use**:

- Questions about Claude Code features, hooks, slash commands
- Anthropic SDK usage (Messages API, Tool Runner)
- Claude Tag setup for Slack workspaces
- General Claude-powered development workflows

**Available Tools**: Glob, Grep, Read, WebFetch, WebSearch

**Capabilities**:

- Configuration guidance for Claude Code harness
- MCP server setup and troubleshooting
- IDE integration documentation
- Security and permissions configuration

### Explore

**Primary Use**: Code discovery and quick lookups
**When to Use**:

- Finding files by pattern (e.g., "Components/sections/hero.tsx")
- Searching for specific keywords, symbols, or references
- Answering "where is X defined?" or "which files reference Y?"
- Initial codebase exploration and navigation

**Limitations**: Reads file excerpts rather than entire files — may miss content past read window

**Best Practices**:

- Use for targeted, specific searches
- Combine with Grep for precise filtering
- Avoid for complex analysis or code review

### general-purpose

**Primary Use**: Complex research and multi-step tasks
**When to Use**:

- Researching complex technical questions
- Multi-step implementation planning
- Analyzing large codebases
- Extended verification processes

**Available Tools**: Full tool access

**Workflows**:

- Deep codebase analysis
- Cross-file consistency checks
- Open-ended problem solving
- Multi-stage implementation planning

### Plan

**Primary Use**: Software architecture and implementation design
**When to Use**:

- Designing new feature implementations
- Planning architectural changes
- Identifying critical files and dependencies
- Creating step-by-step implementation strategies

**Available Tools**: All tools except Agent, Artifact, ExitPlanMode, Edit, Write, NotebookEdit

**Output**: Step-by-step plans with architectural trade-offs

### statusline-setup

**Primary Use**: Claude Code status line configuration
**When to Use**:

- Setting up status line configurations
- Managing agent-specific status displays
- Customizing status line appearances

---

## Agent Selection Guidelines

### Quick vs. Deep Work

| Task Type               | Recommended Agent | Reason                     |
| ----------------------- | ----------------- | -------------------------- |
| File lookup             | Explore           | Fast, targeted searches    |
| Pattern search          | Grep              | Direct file content search |
| Research questions      | general-purpose   | Complex analysis           |
| Implementation planning | Plan              | Architectural design       |
| Technical setup         | claude-code-guide | Claude-specific guidance   |

### Workflow Patterns

#### Research & Discovery

1. **Initial Exploration**: Use `Explore` for quick pattern matching
2. **Deep Research**: Use `general-purpose` for complex queries
3. **Architecture Planning**: Use `Plan` for implementation strategies

#### Development Workflows

1. **Code Changes**: Direct file editing with Read/Edit/Write tools
2. **Multi-Agent Collaboration**: Launch parallel agents for independent work
3. **Verification**: Use `claude-code-guide` for technical accuracy

#### Maintenance Tasks

1. **Component Updates**: Use `general-purpose` for complex refactoring
2. **Bug Fixes**: Direct file editing with targeted tests
3. **Documentation**: Use `claude-code-guide` for setup questions

---

## Performance Optimization

### For Large Codebases

#### Incremental Reading

```javascript
// Use Explore for initial discovery
await agent("Find all components in Components/sections", {
  schema: COMPONENTS_SCHEMA,
});
```

#### Targeted Searches

```javascript
// Use Grep for precise filtering
await agent("Find all references to animation libraries", {
  schema: ANIMATION_SCHEMA,
});
```

#### Parallel Processing

```javascript
// Launch multiple agents for independent tasks
await parallel([
  () => agent("Review component architecture", { phase: "architecture" }),
  () => agent("Check performance patterns", { phase: "performance" }),
  () => agent("Verify accessibility compliance", { phase: "accessibility" }),
]);
```

### For CI/CD Integration

#### Testing Strategy

- Leverage Next.js test runner
- Use TypeScript for type safety
- Implement comprehensive coverage

#### Build Optimization

- Use TypeScript for early error detection
- Implement linting and formatting
- Optimize bundle sizes

---

## Special Notes

### Next.js App Router Conventions

The project uses standard Next.js conventions:

- `(main)` for main section routes
- `(links)` for redirect pages
- Standardized component import paths

### Component Architecture

#### Modular Design

- Self-contained, reusable components
- Props-based composition
- Tailwind CSS utility styling
- Accessibility-first approach

#### Performance Considerations

- Code splitting with Next.js
- Optimized image loading
- Efficient bundle sizes
- Smooth scrolling with Lenis

### File Structure Patterns

```
app/
├── layout.tsx              # Root layout (SEO, schema, global styles)
├── page.tsx                # Main page component
├── (main)/                 # Main section routes
│   └── page.tsx           # Home page
├── (links)/                # Redirect pages
│   ├── github/page.tsx    # External redirects
│   └── ...               # Other social redirects
├── design/                 # Design gallery
└── Components/             # Reusable UI components
    ├── sections/          # Portfolio sections
    │   ├── hero.tsx       # Hero section
    │   ├── work.tsx       # Projects section
    │   └── ...           # Other sections
    ├── footer.tsx         # Navigation
    └── ui/                # UI component library
```

---

## Workflow Examples

### Example 1: Code Discovery

```javascript
// Find all section components
await agent("Find all files in Components/sections directory", {
  schema: SECTION_SCHEMA,
  phase: "discovery",
});
```

### Example 2: Implementation Planning

```javascript
// Plan new feature implementation
await agent("Design new animation system for hero section", {
  schema: IMPLEMENTATION_PLAN_SCHEMA,
  phase: "planning",
});
```

### Example 3: Technical Verification

```javascript
// Verify technical compliance
await agent("Check if all components follow accessibility standards", {
  schema: ACCESSIBILITY_SCHEMA,
  phase: "verification",
});
```

---

## Configuration Management

### Claude Code Settings

Use the `update-config` skill for:

- Permissions configuration
- Environment variables
- Hook setup
- Tool allowlists

### Agent-Specific Configuration

- **claude-code-guide**: Full tool access for comprehensive guidance
- **Explore**: Read-only access for safe exploration
- **general-purpose**: Full tool access for complex tasks
- **Plan**: Design-focused tools for architecture planning
- **statusline-setup**: Configuration-specific tools

---

## Troubleshooting

### Common Issues

#### Agent Performance

**Problem**: Slow response times
**Solution**: Use `Explore` for initial discovery, then `general-purpose` for deep analysis

#### File Access

**Problem**: Permission errors
**Solution**: Ensure proper configuration in `.claude/settings.json`

#### Tool Limitations

**Problem**: Certain tools not available
**Solution**: Use appropriate agent based on task requirements

### Debugging Commands

```bash
# Check agent status
/claude status

# View configuration
/config

# Test tool access
/tools
```

---

## Getting Help

### Agent Selection

- **Confused about which agent to use?** Ask for guidance
- **Need specific capabilities?** Request agent with required tools
- **Complex tasks?** Start with `general-purpose` or `Plan`

### Technical Support

- **Claude Code issues?** Use `claude-code-guide` agent
- **Code review needed?** Use `general-purpose` agent
- **Architecture questions?** Use `Plan` agent

---

## Memory & Context

### Project Context

- Keep track of current development priorities
- Document architectural decisions
- Maintain list of active tasks and blockers

### User Preferences

- Record preferred development workflows
- Document coding standards and conventions
- Track testing and deployment preferences

---

## Updates & Maintenance

### Agent Configuration Updates

- Regularly review agent effectiveness
- Update based on new project requirements
- Maintain compatibility with project evolution

### Performance Monitoring

- Monitor agent response times
- Track tool usage patterns
- Optimize workflows based on experience

---

## Conclusion

This agent configuration ensures optimal development workflows for Amin Zare's portfolio website. By selecting the appropriate agent for each task type, developers can maximize efficiency, maintain code quality, and ensure consistent project standards.

The key to success is understanding the strengths and limitations of each agent and using them strategically based on the specific requirements of each task.

---

**Last Updated**: August 2026
**Version**: 1.0

_This configuration is designed to support the maintenance and development of aminzare.me while following modern software engineering best practices._

---

_For questions about this configuration, contact Amin directly or refer to the project documentation._

---

**Note**: This document is actively maintained and will be updated as the project evolves and new agent configurations become available.
