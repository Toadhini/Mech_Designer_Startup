# CS 260 Notes

[My startup](https://createmechsheets.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 100.31.226.5
This is my elastic IP set up through AWS services 

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

HTML was not too bad utilizing the tables helped a lot with formatting the statistics tables to give a clean look. Awkward part was figuring out how to do the drop town sections in creation page without sending all of the other information page all over the page. Utilising the hr and br elelemnts helped me out a lot

I had an issue with it loading at first but realized that first page is required to label it index.html as that is what the browser will load automatically.

I did have to search up how to utilise the links to toggle between pages but having that was a huge help in devloping and visualising the actual end product of the development.

To maker better use of space on page be sure to properly use header/body/foot to help section off each part

The "bones" or structure that make up the code for the site.
For adding simple space between elements put <br> to add a line
<td> is very useful and you can apply types to it such as the email and password type, password type makes it so that when typing password it is placed with dots as to help secure
Index.html is required as that is the file the browser will load by default


## CSS

At first I was not sure what to do with my style of my startup so I spun up a simple css file that would cover all the pages that I would then go back over later once a style had been better solidified in my mind.
I a thinking I want to do something mechanical seeming or something similar. I also need to create the CSS for the statistics as I think they could look a lot better than a simple table.

Simon CSS deployed succsessfully with no problems.
Adding the button reactivity color is nice and helps it look better but I am unsure of the styling that I have in at the moment, I like the font but not sure about the colors.

```css
part-option {
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    background-color: #666;
    border: 1px solid #999;
    cursor: pointer;
    font-family: 'Orbitron', Arial, sans-serif;
    font-size: 12px;
}

.part-option:hover {
    background-color: white;
    color: blue;
    border-color: #0052a3;
}

.part-option:active {
    background-color: blue
}
```
I think it would be nice to have a photo perhaps of something mech related to give it some more styling. At least a more "Mechanic" font to help push the theme of the page.
I think I want to base it similar to the Amored Core 6 part store / garage. Adding a line to seperate the parts list from the others and a background would help with the styling of it and help make it look less like its original html styling

I didnt use bootstrap until now and I am a fool

Had to look up a lot more information regarding on how to actually implement bootstrap into what I have but it was not too hard, just lost of reformatting and renaming

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```


## Helpful Links

A webpage that allows users to create an account and then create datasheets for mechs/robots with interchangable parts that they can save and share their creations as well as browse through creations by other users.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

## Command Line
Use to ssh into server: ssh -i ~/keys/production.pem ubuntu@100.31.226.5
whois and nslookup

commands that can be used with a domain name to learn certain information regarding that site

