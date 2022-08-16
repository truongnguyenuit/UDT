import React from "react";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.page1,
    page: <Page1/>
  },
  {
    path: pathName.page2,
    page: <Page2/>
  }
]