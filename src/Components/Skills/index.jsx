import "./index.scss";
import React from "react";
import Bootstrap from "../../Assets/Skill_icons/bootstrap-original-wordmark.svg";
import CSS from "../../Assets/Skill_icons/css3-original-wordmark.svg";
import Express from "../../Assets/Skill_icons/express-original-wordmark.svg";
import Firebase from "../../Assets/Skill_icons/firebase-plain-wordmark.svg";
import Git from "../../Assets/Skill_icons/git-original-wordmark.svg";
import Github from "../../Assets/Skill_icons/github.svg";
import HTML from "../../Assets/Skill_icons/html.svg";
import Js from "../../Assets/Skill_icons/js.svg";
import Markdown from "../../Assets/Skill_icons/md.svg";
import Mongo from "../../Assets/Skill_icons/mongo.svg";
import MUI from "../../Assets/Skill_icons/mui.svg";
import Next from "../../Assets/Skill_icons/next.svg";
import Node from "../../Assets/Skill_icons/node.svg";
import NPM from "../../Assets/Skill_icons/npm.svg";
import Python from "../../Assets/Skill_icons/python.svg";
import ReactLogo from "../../Assets/Skill_icons/react.svg";
import ReduxLogo from "../../Assets/Skill_icons/redux.svg";
import Sass from "../../Assets/Skill_icons/sass.svg";
import Styled from "../../Assets/Skill_icons/styled.svg";
import TS from "../../Assets/Skill_icons/ts.svg";



const Skills = () => {
  return (
    <section className="skills__container">
      <h1>SKILLS</h1>
      <div className="skill_logo_container">
        <img src={Bootstrap} alt="skill logo" />
        <img src={CSS} alt="skill logo" />
        <img src={Express} alt="skill logo" />
        <img src={Firebase} alt="skill logo" />
        <img src={Git} alt="skill logo" />
        <img src={Github} alt="skill logo" />
        <img src={HTML} alt="skill logo" />
        <img src={Js} alt="skill logo" />
        <img src={Markdown} alt="skill logo" />
        <img src={Mongo} alt="skill logo" />
        <img src={MUI} alt="skill logo" />
        <img src={Next} alt="skill logo" />
        <img src={Node} alt="skill logo" />
        <img src={NPM} alt="skill logo" />
        <img src={Python} alt="skill logo" />
        <img src={ReactLogo} alt="skill logo" />
        <img src={ReduxLogo} alt="skill logo" />
        <img src={Sass} alt="skill logo" />
        <img src={Styled} alt="skill logo" />
        <img src={TS} alt="skill logo" />
      </div>
    </section>
  );
};

export default Skills;
