import React, { FC } from "react";
import { Hit } from "react-instantsearch-core";

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

export interface ICompanyDoc {
    data_company: DataCompany;
    data_job: DataJob;
}

interface IProps {
    data: Hit<ICompanyDoc>
}

export const SearchResultItem: FC<IProps> = ({ data }) => (
    <li>{ data.data_company.company_name }</li>
)