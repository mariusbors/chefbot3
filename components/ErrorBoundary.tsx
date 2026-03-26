import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4 font-sans">
          <div className="text-6xl mb-4">🍳</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Ups! Ceva s-a ars...</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Roboțelul nostru a întâmpinat o mică problemă tehnică în bucătărie. Nu îți face griji, rețetele sunt în siguranță.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#2C95C9] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-600 transition-transform hover:scale-105 active:scale-95"
          >
            Reîncarcă Pagina
          </button>
        </div>
      );
    }

    return (this as any).props.children;
  }
}