import React, { InputHTMLAttributes } from "react";

type IPropsInput = InputHTMLAttributes<any> & {
    textLabel: string
    id: string
}
class Input extends React.Component<IPropsInput> {
    constructor(props: IPropsInput) {
        super(props)
    }

    render(): React.ReactNode {
        const { textLabel, id, ...rest } = this.props;
        return (
            <div className="flex flex-col mb-5">
                <label
                    className="text-gray-900"
                    htmlFor={id}>{textLabel ?? "Label"}</label>
                <input
                    id={id}
                    className="border border-slate-300 p-3 rounded-md"
                    {...rest} />
            </div>
        )
    }
}

export default Input