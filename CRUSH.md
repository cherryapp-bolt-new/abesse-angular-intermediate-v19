# CRUSH.md - Angular Basic v19 Project Guide

## Commands
- **Build**: `ng build` or `npm run build`
- **Dev Server**: `ng serve` or `npm start`
- **Test All**: `ng test` or `npm test`
- **Test Single**: `ng test --include="**/component.spec.ts"`
- **Watch Mode**: `ng build --watch --configuration development` or `npm run watch`

## Code Style Guidelines

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Target: ES2022, Module: ES2022
- Angular compiler: Strict injection parameters, input access modifiers, and templates

### Component Patterns
- Use standalone components with explicit imports
- Signals API: `input()`, `output()`, `signal()` for reactive state
- Generic components: `Component<T extends { [k: string]: any; id: number }>`
- Template/style URLs relative to component file

### Service Patterns
- Base service class with generics: `BaseService<T>`
- Dependency injection: Use `inject()` function instead of constructor injection
- API URL: Centralized in base service
- Entity name: Override in subclasses

### Model Patterns
- Class-based models with default values
- Dynamic properties: `[k: string]: any`
- PascalCase class names, camelCase properties

### Import Organization
```typescript
import { Component } from '@angular/core';        // Angular core
import { HttpClient } from '@angular/common/http'; // Angular modules
import { Observable } from 'rxjs';                // Third-party
import { Cinema } from '../model/cinema';         // Local imports
```

### Naming Conventions
- Components: PascalCase with descriptive prefixes (e.g., `AbesseSidebarComponent`)
- Services: PascalCase ending with `Service`
- Models: PascalCase
- Properties/Methods: camelCase
- Interfaces: PascalCase with `I` prefix for component interfaces

### Formatting
- Single quotes for strings
- 2-space indentation
- Trailing commas and final newlines
- No semicolons (TypeScript ASI)

### Testing
- Jasmine/Karma setup
- Standard Angular TestBed configuration
- Basic service creation tests included