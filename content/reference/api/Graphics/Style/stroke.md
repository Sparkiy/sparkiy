---
title: stroke -- Sparkiy Reference
headerActiveClass: reference
generatorVersion: 0.1.0
generatedDate: 2/9/2015
---

### stroke

    stroke(red, green, blue)
    red, green, blue = stroke()

Sets or gets the color of the stroke.

Color values are in range from `0` to `1` which can be directly mapped to hex values `0` to `255`.

Returns three numbers cooresponding to the color values same - `red`, `green`, `blue`.

`red` | `Number` | The red. Valid range is from `0` to `1` including those values.
`green` | `Number` | The green. Valid range is from `0` to `1` including those values.
`blue` | `Number` | The blue. Valid range is from `0` to `1` including those values.

```Example

====
function draw()
    stroke(0.18, 0.62, 0.78)
    rect(0, 0, 50, 50)
end
```


