import {Layout} from "../components/Layout";
import {Content} from "../components/Content"
import {Search} from "../components/Search";
import React, {useState} from "react";
import {Header} from "../components/Header";

export default function Home() {
   const [searchValue, setSearchValue] = useState("")

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       const value = e.target.value;
       setSearchValue(value);
   }

  return (
    <Layout>
      <Content>
          <Header>inploi Test Application</Header>
          <Search value={searchValue} onChange={handleSearch}/>
      </Content>
    </Layout>
  )
}


