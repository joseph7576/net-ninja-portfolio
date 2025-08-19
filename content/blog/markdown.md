---
title: Cheat Sheet
description: HEHEHEHEHEHHEHEHEHEEH
cover: dummy.png
tags:
    - blog
    - learn
---

Here's a comprehensive Markdown sample showcasing most Markdown features with examples:


# Markdown Cheat Sheet

## Headers
# H1
## H2
### H3
#### H4
##### H5
###### H6

:::test-comp{title="testing really yooooooooooooooo"}
holy jesus
:::

## Text Formatting
*Italic* or _Italic_  
**Bold** or __Bold__  
***Bold Italic*** or ___Bold Italic___  
~~Strikethrough~~  
`Inline code`  

## Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
* Alternative bullet
+ Another alternative

### Ordered List
1. First item
2. Second item
   1. Subitem
   2. Subitem
3. Third item

### Task List
- [x] Complete markdown cheat sheet
- [ ] Add more examples
- [ ] Share with team

## Links & Images
[Google](https://www.google.com)  
[Relative link](/blog/hello-world)  
[Link with title](https://www.example.com "Example Title")  

![Alt text](https://example.com/image.jpg "Image title")  
![Local image](./images/logo.png)  

## Code Blocks

Inline `code` example.

```py
def hello_world():
    print("Hello, World!")
    return True
```

```js
console.log("JavaScript code block");
```

## Tables

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

Left-aligned | Center-aligned | Right-aligned
:-----------|:-------------:|-------------:
Left        | Center        | Right
Data        | Data          | Data

## Blockquotes

> This is a blockquote.
> 
> It can span multiple lines.
>
> > Nested blockquote.

## Horizontal Rule

---

***

___

## Inline HTML

<button>Click Me</button>

<span style="color:blue">Blue text</span>

## Footnotes

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2
: Second definition

## Emoji

:smile: :heart: :rocket: :thumbsup:

## Math (with extensions)

Inline math: $E = mc^2$

Block math:
$$
\int_a^b f(x)dx = F(b) - F(a)
$$

## Special Characters

\* Literal asterisk  
\# Literal hash  
\\ Backslash  

## Mermaid Diagrams (with extensions)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Admonitions (with extensions)

!!! note
    This is a note admonition.

!!! warning "Heads up!"
    This is a warning with custom title.


Note: Some features like Mermaid diagrams, math formulas, and admonitions require Markdown extensions or specific implementations (like MkDocs, GitHub Flavored Markdown, etc.). Basic Markdown supports most other features shown above.