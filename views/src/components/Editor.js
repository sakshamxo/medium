import { createReactEditorJS } from "react-editor-js";
import { ReactComponent as Nel } from '../Assets/Nel.svg'
import { useRef, useCallback } from "react";
import { EDITOR_JS_TOOLS } from "./constants";
import { asynccreateblog, asyncloadblogs } from "../store/userActions";
import { useDispatch } from "react-redux";
import "../Stylesheets/Editor.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ReactEditorJS = createReactEditorJS();

function Editor() {
    const navigate = useNavigate()
    const toastupload = ()=> toast('Story Created')
    const dispatch = useDispatch();
    const goback = ()=>{
        navigate("/home")
    }
    const editorJS = useRef(null);
    const handleInitialize = (instance) => {
        editorJS.current = instance;
    };

    const handleSave = async () => {
        const savedData = await editorJS.current.save();
        toastupload()

        let blog = "";
        savedData.blocks.forEach((element) => {
            // console.log(element);

            if (element.type === "paragraph") {
                blog += "<p>" + element.data.text + "</p>";
            }
            if (element.type === "header") {
                blog +=
                    "<h" +
                    element.data.level +
                    ">" +
                    element.data.text +
                    "</h" +
                    element.data.level +
                    ">";
            }
            if (element.type === "list") {
                blog +=
                    "<" +
                    element.data.style[0] +
                    element.type[0] +
                    "/>" +
                    element.data.items
                        .map((i) => "<li>" + i + "</li>")
                        .join("") +
                    "<" +
                    element.data.style[0] +
                    element.type[0] +
                    "/>";
            }
            if (element.type === "code") {
                blog +=
                    "<" +
                    element.type +
                    ">" +
                    element.data.code +
                    "</" +
                    element.type +
                    ">";
            }
            if (element.type === "quote") {
                blog +=
                    "<" +
                    element.type[0] +
                    ">" +
                    element.data.text +
                    "</" +
                    element.type[0] +
                    ">";
            }
            if (element.type === "image") {
                blog +=
                    "<img src=" +
                    element.data.file.url +
                    " /><figcaption>" +
                    element.data.caption +
                    "</figcaption>";
            }
        });

        await dispatch(asynccreateblog({ data: blog }));
        await dispatch(asyncloadblogs());
    };

    const handleClear = useCallback(async () => {
        await editorJS.current.clear();
    }, []);
    return (
        <div className="editor">
        <div className="editor-main">
            <div className="editor-nav">
                <div className="nav-right">
                    <div onClick={goback} className="nav-logo">
                        <Nel/>
                    </div>
                    <h3>Create Your Stories</h3>
                </div>
            <div className="nav-left">
                <button className="publish" onClick={handleSave} >Publish</button>
                <button className="clear" onClick={handleClear} >Clear</button>
                <div className="nav-img">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
            <div className="editor-write">
            <ReactEditorJS
                tools={EDITOR_JS_TOOLS}
                onInitialize={handleInitialize}
            />
            </div>
        </div>
    </div>
    );
}

export default Editor;