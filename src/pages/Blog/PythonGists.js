import React from "react";
import { CopyBlock,dracula } from "react-code-blocks";

function PythonGists(){
  return(
<>

<div className="spacer" data-height="96"></div>
    <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <h1>
                # Python code snippets and gists
              </h1>

              <h2>## Image resize</h2>
              <CopyBlock
                text={`
                #!/usr/bin/python 
                
                from PIL import Image 
                import os, sys

                path = './images' 
                dirs = os.listdir( path ) 
                
                def image_resize():     
                  for item in dirs:         
                    if os.path.isfile(path+item):             
                      im = Image.open(path+item)             
                      f, e = os.path.splitext(path+item)             
                      imResize = im.resize((1080,1080), Image.ANTIALIAS) 
                      imResize.save(f + 'resized.jpg', 'JPEG', quality=100) 
                
                image_resize()`}
                language='python'
                showLineNumbers='true'
                wrapLines={true}
                codeBlock
                theme={dracula}
              />
            <h2>## Remove background</h2>
            <CopyBlock
                text={`
                #!/usr/bin/python

                # pip install rembg
                # pip install easygui
                
                from rembg import remove
                from PIL import Image
                import easygui as eg
                
                def remove_background():
                  input_path = eg.fileopenbox(title='Select image file')
                  output_path = eg.filesavebox(title='Save file to..')
                  input = Image.open(input_path)
                  output = remove(input)
                  output.save(output_path)
                  
                remove_background()
                `}
                language='python'
                showLineNumbers='true'
                wrapLines={true}
                codeBlock
                theme={dracula}
              />
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
        
 </>
 )
}

export default PythonGists;
