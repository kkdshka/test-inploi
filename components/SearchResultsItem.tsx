import React, {FC} from "react";
import {Hit} from "react-instantsearch-core";
import Image from "next/image";
import styled from 'styled-components';
import {Badge} from "./Badge";
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

const IMAGES_SIZE: number = 150;

type DataCompany = {
    company_id: number,
    company_industry: string,
    company_logo: string,
    company_name: string,
    company_size: number,
    company_type: string,
}

type DataJob = {
    job_description: string,
    job_experience: string,
    job_id: number,
    job_owned: boolean,
    job_status: string,
    job_title: string,
    job_type: string,
    job_url: string,
    job_views: number,
    job_wage: number,
    job_wage_currency: string,
    job_wage_type: string,
}

type DataLocation = {
    location_address_1: string,
    location_address_2: string,
    location_city: string,
    location_country: string,
    location_postcode: string,
}

export interface ICompanyDoc {
    data_company: DataCompany;
    data_job: DataJob;
    data_location: DataLocation;
}

interface IProps {
    data: Hit<ICompanyDoc>
}

export const SearchResultItem: FC<IProps> = ({data}) => {
    console.log(data);
    return <SearchResultItemWrapper>
        <HeaderWrapper>
        <div>
            <Image
                src={data.data_company.company_logo}
                alt=""
                height={IMAGES_SIZE}
                width={IMAGES_SIZE}
            />
        </div>
        <CompanyName>{data.data_company.company_name}</CompanyName>
        </HeaderWrapper>
        <BadgesWrapper>
            <Badge icon={faCompass} text={`${data.data_location.location_city}, ${data.data_location.location_country}`}/>
            <Badge icon={faBriefcase} text={data.data_job.job_type}/>
            <Badge icon={faCoins} text={data.data_job.job_wage_type}/>
        </BadgesWrapper>
        <Button>View Job</Button>
    </SearchResultItemWrapper>
};

const SearchResultItemWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CompanyName = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 1em;
  color: #333333;
`

const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.75em;
`

const Button = styled.button`
  background-color: #0045FF;
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding: 0.75em 1em;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  align-self: flex-end;
`