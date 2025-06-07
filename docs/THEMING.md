# Theming System Documentation

## Overview
The theming system is built using SCSS with a modular approach that supports both light and dark modes. This document details the implementation and usage of the theme system.

## Core Components

### 1. Color System
Located in `_variables.scss`, the color system uses a dual-color approach:

```scss
// Brand Colors with RGB values for opacity support
$brand-colors: (
  'primary': #3b82f6,    // Blue
  'secondary': #8b5cf6,  // Purple
  'accent': #ec4899     // Pink
);

// Neutral Colors for light/dark modes
$neutral-colors: (
  '50': #f9fafb,
  '100': #f3f4f6,
  '200': #e5e7eb,
  '300': #d1d5db,
  '400': #9ca3af,
  '500': #6b7280,
  '600': #4b5563,
  '700': #374151,
  '800': #1f2937,
  '900': #111827
);
```

### 2. Theme Mixins
Located in `_mixins.scss`, these mixins handle theme-related functionality:

```scss
// Theme Background Mixin
@mixin theme-background($light, $dark) {
  background-color: $light;
  @media (prefers-color-scheme: dark) {
    background-color: $dark;
  }
}

// Theme Text Mixin
@mixin theme-text-secondary($light, $dark) {
  color: $light;
  @media (prefers-color-scheme: dark) {
    color: $dark;
  }
}

// Theme Background Secondary Mixin
@mixin theme-background-secondary($light, $dark) {
  background-color: $light;
  @media (prefers-color-scheme: dark) {
    background-color: $dark;
  }
}
```

## Implementation Details

### 1. Theme Switching
The system supports both automatic and manual theme switching:

#### Automatic Detection
```scss
@media (prefers-color-scheme: dark) {
  // Dark mode styles
}
```

#### Manual Override
```scss
[data-theme="dark"] {
  // Dark mode styles
}
```

### 2. Component Theming
Example of component theming using the header:

```scss
.header {
  @include theme-background(
    map-get($neutral-colors, '100'),
    map-get($neutral-colors, '900')
  );

  &__text {
    @include theme-text-secondary(
      map-get($neutral-colors, '700'),
      map-get($neutral-colors, '300')
    );
  }
}
```

### 3. Animation System
The theme includes several animations for enhanced user experience:

```scss
// Spin Animation
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// Float Animation
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

// Gradient Animation
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## Best Practices

### 1. Color Usage
- Always use semantic color variables
- Maintain WCAG contrast ratios
- Support both themes equally
- Use RGB values for opacity support

### 2. Performance
- Use hardware-accelerated properties
- Optimize animations
- Minimize repaints
- Use transform instead of position properties

### 3. Accessibility
- Maintain WCAG 2.1 compliance
- Support reduced motion
- Ensure readable contrast ratios
- Test with screen readers

## Usage Guidelines

### 1. Adding New Components
```scss
.new-component {
  @include theme-background(
    map-get($neutral-colors, '50'),
    map-get($neutral-colors, '800')
  );
  
  &__text {
    @include theme-text-secondary(
      map-get($neutral-colors, '700'),
      map-get($neutral-colors, '300')
    );
  }
}
```

### 2. Adding New Colors
```scss
// Add to _variables.scss
$new-colors: (
  'light': #ffffff,
  'dark': #000000
);
```

### 3. Creating New Mixins
```scss
// Add to _mixins.scss
@mixin new-theme-mixin($light, $dark) {
  property: $light;
  @media (prefers-color-scheme: dark) {
    property: $dark;
  }
}
```

## Troubleshooting

### Common Issues

1. **Theme Not Switching**
   - Check media query syntax
   - Verify CSS variable definitions
   - Ensure proper mixin usage

2. **Animation Performance**
   - Use transform instead of position
   - Check for layout thrashing
   - Optimize animation duration

3. **Color Contrast**
   - Verify contrast ratios
   - Test with color contrast tools
   - Check both themes

## Future Improvements

1. **Planned Features**
   - Custom theme support
   - Theme persistence
   - More animation options

2. **Optimization Goals**
   - Reduce CSS bundle size
   - Improve animation performance
   - Enhance accessibility

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)
- [MDN Web Docs - prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 