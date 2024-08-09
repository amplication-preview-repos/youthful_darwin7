import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SavingsAccountList } from "./savingsAccount/SavingsAccountList";
import { SavingsAccountCreate } from "./savingsAccount/SavingsAccountCreate";
import { SavingsAccountEdit } from "./savingsAccount/SavingsAccountEdit";
import { SavingsAccountShow } from "./savingsAccount/SavingsAccountShow";
import { P2PTransferList } from "./p2PTransfer/P2PTransferList";
import { P2PTransferCreate } from "./p2PTransfer/P2PTransferCreate";
import { P2PTransferEdit } from "./p2PTransfer/P2PTransferEdit";
import { P2PTransferShow } from "./p2PTransfer/P2PTransferShow";
import { BankTransferList } from "./bankTransfer/BankTransferList";
import { BankTransferCreate } from "./bankTransfer/BankTransferCreate";
import { BankTransferEdit } from "./bankTransfer/BankTransferEdit";
import { BankTransferShow } from "./bankTransfer/BankTransferShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { InfluencerPageList } from "./influencerPage/InfluencerPageList";
import { InfluencerPageCreate } from "./influencerPage/InfluencerPageCreate";
import { InfluencerPageEdit } from "./influencerPage/InfluencerPageEdit";
import { InfluencerPageShow } from "./influencerPage/InfluencerPageShow";
import { FreelanceJobList } from "./freelanceJob/FreelanceJobList";
import { FreelanceJobCreate } from "./freelanceJob/FreelanceJobCreate";
import { FreelanceJobEdit } from "./freelanceJob/FreelanceJobEdit";
import { FreelanceJobShow } from "./freelanceJob/FreelanceJobShow";
import { MatchmakingList } from "./matchmaking/MatchmakingList";
import { MatchmakingCreate } from "./matchmaking/MatchmakingCreate";
import { MatchmakingEdit } from "./matchmaking/MatchmakingEdit";
import { MatchmakingShow } from "./matchmaking/MatchmakingShow";
import { FreelanceCategoryList } from "./freelanceCategory/FreelanceCategoryList";
import { FreelanceCategoryCreate } from "./freelanceCategory/FreelanceCategoryCreate";
import { FreelanceCategoryEdit } from "./freelanceCategory/FreelanceCategoryEdit";
import { FreelanceCategoryShow } from "./freelanceCategory/FreelanceCategoryShow";
import { BitcoinTransactionList } from "./bitcoinTransaction/BitcoinTransactionList";
import { BitcoinTransactionCreate } from "./bitcoinTransaction/BitcoinTransactionCreate";
import { BitcoinTransactionEdit } from "./bitcoinTransaction/BitcoinTransactionEdit";
import { BitcoinTransactionShow } from "./bitcoinTransaction/BitcoinTransactionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FilterList } from "./filter/FilterList";
import { FilterCreate } from "./filter/FilterCreate";
import { FilterEdit } from "./filter/FilterEdit";
import { FilterShow } from "./filter/FilterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HiyatPay"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SavingsAccount"
          list={SavingsAccountList}
          edit={SavingsAccountEdit}
          create={SavingsAccountCreate}
          show={SavingsAccountShow}
        />
        <Resource
          name="P2PTransfer"
          list={P2PTransferList}
          edit={P2PTransferEdit}
          create={P2PTransferCreate}
          show={P2PTransferShow}
        />
        <Resource
          name="BankTransfer"
          list={BankTransferList}
          edit={BankTransferEdit}
          create={BankTransferCreate}
          show={BankTransferShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="InfluencerPage"
          list={InfluencerPageList}
          edit={InfluencerPageEdit}
          create={InfluencerPageCreate}
          show={InfluencerPageShow}
        />
        <Resource
          name="FreelanceJob"
          list={FreelanceJobList}
          edit={FreelanceJobEdit}
          create={FreelanceJobCreate}
          show={FreelanceJobShow}
        />
        <Resource
          name="Matchmaking"
          list={MatchmakingList}
          edit={MatchmakingEdit}
          create={MatchmakingCreate}
          show={MatchmakingShow}
        />
        <Resource
          name="FreelanceCategory"
          list={FreelanceCategoryList}
          edit={FreelanceCategoryEdit}
          create={FreelanceCategoryCreate}
          show={FreelanceCategoryShow}
        />
        <Resource
          name="BitcoinTransaction"
          list={BitcoinTransactionList}
          edit={BitcoinTransactionEdit}
          create={BitcoinTransactionCreate}
          show={BitcoinTransactionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Filter"
          list={FilterList}
          edit={FilterEdit}
          create={FilterCreate}
          show={FilterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
