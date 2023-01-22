import { type NextPage } from "next";
import Head from "next/head";
import { FC, useState } from "react";
import { Patient } from "../types/Patient";

import { api } from "../utils/api";

const PatientPageHeader = () => {
  return (
    <Head>
      <title>Patient List</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const AppContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      {children}
    </main>
  );
};

type PatientDetailsProps = Pick<Patient, "id">;

const PatientDetails: FC<PatientDetailsProps> = ({ id }) => {
  const patient = api.patient.byId.useQuery({ id });

  if (patient.isLoading) {
    return <p>Loading...</p>;
  }

  if (!patient.data) {
    return <p>Patient not found</p>;
  }

  return (
    <>
      <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50">
        <aside className="fixed inset-y-0 right-0 flex w-1/2 max-w-xs flex-col bg-white shadow">
          <h2 className="mt-4 text-center text-2xl font-bold">
            Patient Details
          </h2>
          {patient.data.firstName}
        </aside>
      </div>
    </>
  );
};

const Home: NextPage = () => {
  const patients = api.patient.all.useQuery({ page: 0, limit: 10 });
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  if (patients.isLoading) {
    return (
      <AppContainer>
        <p>Loading...</p>
      </AppContainer>
    );
  }

  if (!patients.data) {
    return (
      <AppContainer>
        <p>There are no patients</p>
      </AppContainer>
    );
  }

  return (
    <>
      <PatientPageHeader />
      <AppContainer>
        <h1 className="mb-4 text-3xl font-bold">Patient List</h1>
        <table className="w-11/12 border-collapse">
          <thead>
            <tr>
              <th className="hidden border border-gray-300 bg-gray-200 p-3 font-bold uppercase text-gray-600 lg:table-cell">
                First Name
              </th>
              <th className="hidden border border-gray-300 bg-gray-200 p-3 font-bold uppercase text-gray-600 lg:table-cell">
                Last Name
              </th>
              <th className="hidden border border-gray-300 bg-gray-200 p-3 font-bold uppercase text-gray-600 lg:table-cell">
                Blood Type
              </th>
              <th className="hidden border border-gray-300 bg-gray-200 p-3 font-bold uppercase text-gray-600 lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.data.map((patient) => (
              <>
                <tr className="lg:flex-no-wrap mb-10 flex flex-row flex-wrap bg-white lg:mb-0 lg:table-row lg:flex-row lg:hover:bg-gray-100">
                  <td className="relative block w-full border border-b p-3 text-center text-gray-800 lg:static lg:table-cell lg:w-auto">
                    <span className="absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase lg:hidden">
                      First Name
                    </span>
                    {patient.firstName}
                  </td>
                  <td className="relative block w-full border border-b p-3 text-center text-gray-800 lg:static lg:table-cell lg:w-auto">
                    <span className="absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase lg:hidden">
                      Last Name
                    </span>
                    {patient.lastName}
                  </td>
                  <td className="relative block w-full border border-b p-3 text-center text-gray-800 lg:static lg:table-cell lg:w-auto">
                    <span className="absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase lg:hidden">
                      Blood Type
                    </span>
                    {patient.bloodType}
                  </td>
                  <td className="relative block w-full border border-b p-3 text-center text-gray-800 lg:static lg:table-cell lg:w-auto">
                    <span className="absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase lg:hidden">
                      Actions
                    </span>
                    <a
                      href="#"
                      className="text-blue-400 underline hover:text-blue-600"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="pl-6 text-blue-400 underline hover:text-blue-600"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        {openDrawer && <PatientDetails id={"1"} />}
      </AppContainer>
    </>
  );
};

export default Home;
