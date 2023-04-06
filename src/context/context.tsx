import React, { useState } from 'react';

interface IUserContext {
  currentUser?: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type Props = {
  children: React.ReactNode;
};

export const CurrentUserContext = React.createContext<IUserContext | undefined>(
  undefined,
);

export const CurrentUserContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<string | undefined>(undefined);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
