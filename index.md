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

<code>const button = document.querySelector(".greet-btn");</code>
- Selects the first HTML element with the class name greet-btn.
- Stores this element in the button variable.

<b>Purpose:</b>
- To add functionality (an event listener) to the button.

<code>button.addEventListener("click", () => {</code>
- Attaches a click event listener to the button element.
- When the button is clicked, the code inside the arrow function (() => {}) is executed.

<b>Purpose:</b>
-To define what should happen when the button is clicked.

<code>const message = document.querySelector(".greet-message");</code>
- Selects the first HTML element with the class name greet-message.
- Stores this element in the message variable.

<b>Purpose:</b>
- To manipulate the greet-message element when the button is clicked.

<code>message.style.display = "block";</code>
- Changes the CSS display property of the message element to block.
- This makes the greet-message element visible if it was hidden (e.g., display: none).

<b>Purpose:</b>
- To display the message when the button is clicked.

<hr>

- CSS

<details>
  <summary>
    CODE
  </summary>
  
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
        "
    >
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
        "
      >
        Greet
      </button>

      <p
        class="greet-message"
        style="
        display: none; 
        font-size: 30px;
        color: #ffffff;
        "
      >
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
</details>

<code>``` <body style="background-color: #1f1e1e;"></body>```</code>
- background-color: #1f1e1e;: Sets the background color of the entire page to a dark shade of gray.

<b>Purpose:</b>
- Provides a dark theme for the page background.

<code>```<div
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
  "></div>```
</code>
- position: absolute;: Positions the container relative to the viewport.
- top: 50%; left: 50%;: Moves the container to the center of the viewport.
- transform: translate(-50%, -50%);: Adjusts the container to be perfectly centered by offsetting it by half its width and height.
- border: 1px solid #fff;: Adds a white border with a thickness of 1px.
- padding: 20px;: Adds 20px of inner spacing between the content and the border.
- border-radius: 10px;: Rounds the corners of the container.
- background-color: #000;: Sets the background color of the container to black.

<b>Purpose:</b>
- Creates a visually distinct, centered container for the greeting content.

<code>``` <h1 style="
  color: #bcbec0; 
  font-size: 50px;
">
The greeting zone 🎊</h1> ```
</code>

- color: #bcbec0;: Sets the text color to a light gray.
- font-size: 50px;: Increases the font size to 50px for emphasis.

<b>Purpose:</b>
- Displays the main heading ("The greeting zone 🎊") in a large, light gray font.

<code> ``` <p 
  style="
    font-size: 25px;
    color: #fff;
  ">
Click here to receive your greeting</p> ```
</code>
- font-size: 25px;: Sets the font size to 25px for readability.
- color: #fff;: Sets the text color to white.

<b>Purpose:</b>
Provides a brief instruction to the user in a readable, white font.

<code>```<button
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
</button>```
</code>

- background-color: #1f1e1e;: Sets the button's background color to dark gray, matching the page background.
- color: #fff;: Sets the text color to white.
- border: none;: Removes the default border around the button.
- padding: 10px;: Adds 10px of inner spacing around the text.
- border-radius: 5px;: Rounds the corners of the button slightly.
- cursor: pointer;: Changes the cursor to a pointer (hand) when hovered over.
- font-size: 20px;: Sets the font size to 20px for better readability.

<b>Purpose:</b>
Provides a visually styled button that users can click to trigger the greeting.

<code>```<p
  class="greet-message"
  style="
    display: none; 
    font-size: 30px;
    color: #ffffff;
  ">
Sat shri akaal! Have a good day.</p>```
</code>
- display: none;: Initially hides this paragraph from view.
- font-size: 30px;: Sets the font size to 30px for prominence.
- color: #ffffff;: Sets the text color to white.

<b>Purpose:</b>
- Displays a greeting message ("Sat shri akaal! Have a good day.") when triggered by the button click.
