(This is the Roblox TS version of this module, any issues or bugs that aren't to do with the type definitions should go to the original repository, not this fork)

# ABOUT
BezierPath is an easy to use bezier spline module, designed to be used for TD games and general paths while being optimizied for large scale uses.

__NOTE__: BezierPath is NOT a traditional bezier spline. it behaves more like a linear spline that curves around each point.

BezierPath can be installed using Wally:
```
BezierPath = "omrezkeypie/bezierpath@2.0.3"
```

To view the API and usage, go [here](https://github.com/omrezkeypie/BezierPath/wiki/API)

## Example

A code snippet showing how to set up and use BezierPath.
```ts
import BezierPath from "@rbxts/bezierpath"

const Positions = [
    new Vector3(0,10,0),
    new Vector3(10,0,0),
    new Vector3(10,10,10)
]
const NewPath = new BezierPath(Positions,3)
const Part = new Instance("Part",workspace)
Part.Size = new Vector3(1,1,1)
Part.Anchored = true

for (const t of $range(0, 1, 1/100)) {
    Part.CFrame = NewPath.CalculateUniformCFrame(t)
    task.wait(0.1)
}
```
A short video showing BezierPath.



https://github.com/omrezkeypie/BezierPath/assets/104690138/5e3fe18a-c8d3-4f0d-a475-55a3bfca6793
