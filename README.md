## quickuse

```typescript
import cls from 'classcombine'
// in react
<div
	className={
    cls({
      [styles.demo1]: true,
      [styles.demo2]: false,
      [styles.demo3]: true
    })
  }
>Test demo</div>

```

After compilation：

```typescript
<div class="demo1 demo3">Testdemo</div>
```



## Features

+ **Lightweight**： just 14 lines

+ **Simple and practical**： very easy but so useful

+ **typescript**

  

