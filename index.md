# Greeting webpage
### About 
In this page when click on button it will generate greeting message.

### Code structure
- HTML
- Inline CSS
- Internal Javascript
<hr>

- Step 1: Create an index.html file
- Step 2: Write HTML code

```bash
<!doctype html>
<html lang="en">
  <head>
    <title>Greeting</title>
  </head>
  <body>
    <div class="greet-container">
      <h1> The greeting zone 🎊</h1>
      <p>Click here to receive your greeting</p>
      <p class='greet-message'Sat shri akaal! Have a good day.</p>
      <button class='greet-btn'>Greet</button>
    </div>
  </body>
</html>
```
<details>
  <summary>
    OUTPUT
  </summary>
  
  ![Screenshot from 2025-01-11 01-41-53](https://github.com/user-attachments/assets/4b2ccdfc-e848-407e-9903-4b2b2eb81838)

</details>

<hr>

- Step 3: Write Javascript (It will make message dynamically display)
- Step 4: The Javascript Code

```bash
<script>
      const button = document.querySelector(".greet-btn");
      button.addEventListener("click", () => {
        const message = document.querySelector(".greet-message");
        message.style.display = "block";
      });
    </script>
```
<details>
  <summary>OUTPUT</summary>
  
  ![Screencastfrom2025-01-1101-43-54-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c424733b-e5b4-40ab-8b98-2074d44d9660)

</details>

<hr>

- Step 5: Write inline CSS
- Step 6: The CSS code

```bash
<body style="background-color: #1f1e1e;">
    <div
      class="greet-container"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #fff;
        padding: 20px;
        border-radius: 10px;
        background-color: #000;
        ">
      <h1 style="
      color: #bcbec0; 
      font-size: 50px
      ">
The greeting zone
🎊
      </h1>
      <p 
      style="
      font-size: 25px;
      color: #fff;
      ">
     Click here to receive your greeting
    </p>
      <button
        class="greet-btn"
        style="
          background-color: #1f1e1e;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 20px;
        ">
        Greet
      </button>
      <p
        class="greet-message"
        style="
        display: none; 
        font-size: 30px;
        color: #ffffff;
        ">
      Sat shri akaal! Have a good day.
      </p>
    </div>
    <script>
      const button = document.querySelector(".greet-btn");
      button.addEventListener("click", () => {
        const message = document.querySelector(".greet-message");
        message.style.display = "block";
      });
    </script>
  </body>
```
<details>
  <summary>OUTPUT</summary>

![Screencastfrom2025-01-1101-53-28-ezgif com-speed](https://github.com/user-attachments/assets/9d8560d6-5ee4-474c-9486-7ac97688138a)

</details>

<hr>

### Breakdown code
- Javascript
<details>
  <summary>
    CODE
  </summary>
  
  ```bash
     <script>
        const button = document.querySelector(".greet-btn");
        button.addEventListener("click", () => {
          const message = document.querySelector(".greet-message");
          message.style.display = "block";
        });
  </script>
```
</details>

