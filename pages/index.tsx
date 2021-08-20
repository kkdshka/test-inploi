import {Layout} from "../components/Layout";
import {Content} from "../components/Content"
import {Search} from "../components/Search";
import React from "react";
import {Header} from "../components/Header";

export default function Home() {
  return (
    <Layout>
      <Content>
          <Header>inploi Test Application</Header>
          <Search/>
      </Content>
    </Layout>
  )
}


