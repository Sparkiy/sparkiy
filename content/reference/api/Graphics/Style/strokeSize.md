---
title: strokeSize -- Sparkiy Reference
headerActiveClass: reference
generatorVersion: 0.1.0
generatedDate: 2/9/2015
---

### strokeSize

    strokeSize(thickness)
    strokeSize = strokeSize()

Sets or gets the stroke thickness.

Value must not be negative. Zero is valid value.


`thickness` | `Number` | The stroke thickness value of all following 2D shapes that have borders.

```Example

====
function draw()
    strokeSize(10)
    rect(0, 0, 50, 50)
end
```


