import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page";
import * as cls from "./[FTName].module.scss";

const [FTName] = () => {
  const { t } = useTranslation(); 

  const reducers: ReducersList = {

  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page className={cls.[FTName]}></Page>
    </DynamicModuleLoader>
  );
};

export default [FTName];
