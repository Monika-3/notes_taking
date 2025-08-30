"use client"
import Markdown from "@uiw/react-markdown-preview";


function Mdeditor() { 
 
    const tips= ` 
### Hii, Here are some sample examples how to write text in markdown writer:

1.For Headings:

\`\`\`
    # Heading 1
    ## Heading 2
    ### Heading 3
\`\`\`

2.For Bold text and Italic text:

\`\`\` 
    **Bold Text**
    *Italic Text*	
\`\`\`

3.For Lists:\n
 	
a.For Unordered List:

\`\`\`
    - List 1
    - List 2
\`\`\`

b.For Ordered List:

\`\`\`
    1. List 1
    2. List 2
\`\`\`

4.For CheckBox: 
    For unticked one - 
\` 
[ ] 
\`,
    For ticked one -
 \` 
[x] 
\`

5.For Links:
         \`\`\`
         [Link Name](link-goes-here)
         \`\`\`

6.For Images:
         \`\`\`
         ![Image Name](image-source-link)
         \`\`\`
`

return <>
  <div>
    <Markdown source={tips} className="pt-5 bg-transparent mx-auto w-[85%] border p-5 "></Markdown>
  </div>
  </>;
}

export default Mdeditor;
