## quickuse

```typescript
import cls from 'classcombine'
// in react
<div
	className={
    cls({
      style1: true,
      style2: false,
      style3: true,
    })
  }
>Test demo</div>

```

After compilation：

```typescript
<div class="style1 style3">Testdemo</div>
```



## Features

+ **Lightweight**： just 14 lines

+ **Simple and practical**： very easy but so useful

+ **typescript**

  

