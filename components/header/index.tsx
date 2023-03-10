import React from "react";

interface IPropsHeader {
    titleHead: string
    descriptionHead: string
}

class Header extends React.Component<IPropsHeader> {

    constructor(props: IPropsHeader) {
        super(props);
    }

    render(): React.ReactNode {
        const { descriptionHead, titleHead } = this.props;
        return (
            <header className={`bg-blue-900 text-white text-center md:py-14  py-5`}>
                <h1 className="md:text-5xl text-2xl underline">{titleHead ?? "Title head"}</h1>
            </header>
        )
    }
}

export default Header

/**
 *  <p className="md:text-2xl text-xl font-light">{descriptionHead ?? "Description head"}</p>
 */