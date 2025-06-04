# Animation System Documentation

## Overview
The animation system provides a collection of reusable animations and transitions to enhance the user experience. This document details the implementation and usage of various animations in the portfolio.

## Core Animations

### 1. Background Effects

#### Spin Animation
Used for rotating background elements:
```scss
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// Usage
.element {
  animation: spin 20s linear infinite;
}
```

#### Float Animation
Used for subtle floating effects:
```scss
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

// Usage
.element {
  animation: float 6s ease-in-out infinite;
}
```

### 2. Text Effects

#### Gradient Text Animation
Used for animated gradient text:
```scss
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

// Usage
.text {
  background: linear-gradient(135deg, 
    var(--color-brand-primary) 0%,
    var(--color-brand-secondary) 50%,
    var(--color-brand-accent) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 8s linear infinite;
}
```

#### Blink Animation
Used for cursor effects:
```scss
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

// Usage
.cursor {
  animation: blink 1s step-end infinite;
}
```

## Interactive Elements

### 1. Button Hover Effects
```scss
.button {
  @include transition(all);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
```

### 2. Social Link Hover Effects
```scss
.social-link {
  @include transition(all);
  
  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, 
      rgba(var(--color-brand-primary-rgb), 0.1) 0%,
      rgba(var(--color-brand-secondary-rgb), 0.1) 100%
    );
  }
}
```

## Performance Considerations

### 1. Hardware Acceleration
Use transform and opacity for better performance:
```scss
.element {
  transform: translateZ(0);
  will-change: transform;
}
```

### 2. Animation Duration
Keep animations short and smooth:
```scss
// Good
.element {
  transition: all 0.3s ease;
}

// Avoid
.element {
  transition: all 1s ease;
}
```

### 3. Reduced Motion
Support users who prefer reduced motion:
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Best Practices

### 1. Animation Timing
- Keep animations under 300ms for interactions
- Use longer durations (5-10s) for background effects
- Use ease-in-out for smooth transitions

### 2. Animation Properties
- Use transform instead of position properties
- Use opacity for fade effects
- Avoid animating layout properties

### 3. Accessibility
- Support reduced motion preferences
- Ensure animations don't interfere with usability
- Provide alternative static states

## Usage Guidelines

### 1. Adding New Animations
```scss
@keyframes newAnimation {
  0% { /* initial state */ }
  50% { /* middle state */ }
  100% { /* final state */ }
}

// Usage
.element {
  animation: newAnimation 2s ease-in-out infinite;
}
```

### 2. Combining Animations
```scss
.element {
  animation: 
    float 6s ease-in-out infinite,
    gradient 8s linear infinite;
}
```

### 3. Animation Mixins
```scss
@mixin animate($name, $duration, $timing, $iteration) {
  animation: $name $duration $timing $iteration;
}

// Usage
.element {
  @include animate(float, 6s, ease-in-out, infinite);
}
```

## Troubleshooting

### Common Issues

1. **Janky Animations**
   - Check for layout thrashing
   - Use transform instead of position
   - Enable hardware acceleration

2. **Performance Issues**
   - Reduce animation complexity
   - Use will-change property
   - Optimize animation duration

3. **Accessibility Issues**
   - Test with reduced motion
   - Ensure keyboard navigation
   - Check contrast during animation

## Future Improvements

1. **Planned Features**
   - More complex animations
   - Scroll-triggered animations
   - 3D transformations

2. **Optimization Goals**
   - Reduce animation complexity
   - Improve performance
   - Enhance accessibility

## References

- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN Web Docs - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [CSS-Tricks - Performance Animation](https://css-tricks.com/performance-animation/) 