import { createContext, useContext, useReducer } from "react";

interface ArticleState {
    height: number,
}

const INITIAL_STATE: ArticleState = {
    height: 0,
}

export const ADJUST_HEIGHT = '[ARTICLE_CONTEXT] ADJUST_HEIGHT';

const reducer = (
  state: ArticleState,
  action: { type: string; payload: any }
): ArticleState => {
  const { type, payload } = action;
  switch (type) {
    case ADJUST_HEIGHT:
        return { ...state, height: payload };
    default:
      return state;
  }
};

export const ArticleContext = createContext<{
  articleState: ArticleState;
  articleDispatch: React.Dispatch<any>;
}>({ articleState: INITIAL_STATE, articleDispatch: () => null });

export const ArticleProvider = ({ children }: any) => {
  const [articleState, articleDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ArticleContext.Provider value={{ articleState, articleDispatch }}>
      {children}
    </ArticleContext.Provider>
  );
}

export const useArticleContext = () => {
  return useContext(ArticleContext);
};