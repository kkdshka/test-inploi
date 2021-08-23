import React, { FC } from "react";
import Image from 'next/image';
import { Hit } from "react-instantsearch-core";
import styled from 'styled-components';

const IMAGES_SIZE: number = 50;

type DataCompany = {
    company_id: number,
    company_industry: string,
    company_logo: string,
    company_name: string,
    company_size: number,
    company_type: string,
}

type DataJob = {
    job_description: "• Chef de partie with previous Chef de Partie experience\n• Fresh food cooking\n• Fun and professional team\n• Salary up to £26k/year\n• Growing company\n• Career progression opportunity\n• Working on every section\n• Cooking fresh seasonal food\n\nLooking for a Chef de Partie with previous Chef de partie experience who would like to join a well established and growing business with great opportunities to grown with your career from Chef de Partie position while cooking high quality fresh food.\n\nModern Brasserie food using seasonal, fresh ingredients cooked up to high standards with great opportunity for a Chef de Partie to create, work on every section and learn as much as you can!\n\nChef de partie salary up to £26k/year with great opportunity to progress with your career working in the kitchen and cooking great food with a professional team!\n\nAPPLY NOW!",
    job_experience: "Varied (1-3 Years)",
    job_id: 80,
    job_owned: true,
    job_status: "live",
    job_title: "Duty Manager",
    job_type: "Full-time",
    job_url: "/accountancy/bakery/chiquitos/chef-de-partie/uk/slough/britwell/78",
    job_views: 38,
    job_wage: 30000,
    job_wage_currency: "£",
    job_wage_type: "Annually",
}

export interface ICompanyDoc {
    data_company: DataCompany;
    data_job: DataJob;
}

interface IProps {
    data: Hit<ICompanyDoc>
}

export const SearchResultItem: FC<IProps> = ({ data }) => (
    <SearchResultItemWrapper>
        <div>
            <Image
                src={data.data_company.company_logo}
                alt=""
                height={IMAGES_SIZE}
                width={IMAGES_SIZE}
            />
        </div>
        <div>{ data.data_company.company_name }</div>
    </SearchResultItemWrapper>
)

const SearchResultItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em;
  align-content: space-between;
`