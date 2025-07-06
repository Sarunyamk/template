# <project-name> Project

## Project Information

- **Name**: <project-name>
- **Version**: 0.1.0
- **Package Manager**: pnpm@10

## Command Usage

To install the dependencies, run:

```bash
pnpm install
```

To start the development server, run:

```bash
pnpm dev
```

To build the project, run:

```bash
pnpm build
```

To build with analysis, run:

```bash
pnpm build:analyze
```

To start the production server, run:

```bash
pnpm start
```

To check for linting errors, run:

```bash
pnpm lint
```

or for throughout strict type-checking, run:

```bash
pnpm lint:strict
```

or for throughout strict, save incrementally, and JIT type-checking, run:

```bash
pnpm lint:strict --incremental --watch
```

To check for formatting errors, run:

```bash
pnpm prettier:check
```

To auto-fix formatting errors, run:

```bash
pnpm prettier:clean
```

To auto-fix linting errors, run:

```bash
pnpm lint:fix
```

To check for unused stuff, check out [knip](https://knip.dev/) and run:

```bash
pnpm knip
```

## Database Management

To generate Prisma client, run:

```bash
pnpm prisma:generate
```

To run database migrations, run:

```bash
pnpm prisma:migrate
```

To open Prisma Studio (database GUI), run:

```bash
pnpm prisma:studio
```

## Key Dependencies

### Core

- Next.js 15
- React 19
- TypeScript 5
- TailwindCSS 4

### Authentication

- NextAuth 5.0.0
- bcrypt-ts

### Database

- Prisma

### UI Components

- Radix UI components
- Lucide React icons
- Tailwind Merge
- Tailwind Animate

### State Management

- Zustand
- React Query

### Form Handling

- React Hook Form
- Zod validation

### Utilities

- date-fns
- uuid
- axios
- jwt-decode
