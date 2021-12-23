import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'features/diary/style/DiaryText.scss'

export default function DiaryDetail(props){
    const diary = props.data
    const [mode, setMode] = useState(0)
    function initManuscript() {
        const manuscript = document.querySelectorAll(".manuscript");
        const handleResize = () => {
            manuscript.forEach((elt) => {
                resizeMnuascriptContainer(elt);
                resizeImage(elt);
            });
        };
    
        window.addEventListener("load", handleResize, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
    
        manuscript.forEach((element) => {
            element.querySelectorAll("p").forEach((element) => {
                const text = element.innerText;
    
                element.innerHTML = "";
                [...text].forEach((word) => {
                    const span = document.createElement("span");
                    const textNode = document.createTextNode(word);
    
                    span.appendChild(textNode);
                    element.append(span);
                });
            });
        });
    
        handleResize();
    }
    useEffect(()=>{initManuscript()},[])
    function resizeMnuascriptContainer(element) {
        element.style.width = `${
            (Math.floor(element.parentElement.offsetWidth / 24) - 1) * 24 - 1
        }px`;
    }
    
    function resizeImage(element) {
        element.querySelectorAll("img").forEach((img) => {
            const { naturalWidth, naturalHeight } = img;
            const ratio = naturalHeight / naturalWidth;
            const newHeight = element.offsetWidth * ratio;
    
            img.height = Math.floor(newHeight - (newHeight % 32) - 8);
        });
    }
    
    initManuscript();
    return(
        <div class="manuscript-all" id="diaryText">
        <div class="manuscript">
            <p>{diary.contents}</p>
        </div>
        <br/>
        <div class="manuscript-all" id="diaryText">
        <tr>
        {mode == 0 ?
        <><td>
            <img class="diary-pencil" src={require("features/diary/images/edit.png").default}
             onClick={() => setMode(1)} /></td><h2>코멘트를 달아보자!</h2></>
             :
             <><td>
            <img class="diary-pencil" src={require("features/diary/images/edit.png").default}
             onClick={() => setMode(0)} /></td><h2>작성 다 했어!</h2></>}
        </tr>  
        <div class="manuscript">
            {mode == 0 ?
            <p>
              {diary.memo}
            </p>
            :<>
            <Box component="form" sx={{m:3, width: 1550, maxWidth: '100%',}} noValidate autoComplete="off">
                <TextField
                    id="standard-multiline-static"    
                    label="MEMO"
                    multiline
                    rows={4}
                    // defaultValue="MEMO"
                    variant="standard"
                    fullWidth 
                    />
            </Box>
            </>}
        </div>
       
   
    </div>
    </div>
    
    )
}