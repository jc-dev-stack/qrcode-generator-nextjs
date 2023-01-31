import React, { InputHTMLAttributes } from "react";

export type PropsOption = {
    value: string | number
    text: string
}

type IPropsInput = InputHTMLAttributes<any> & {
    textLabel: string
    id: string
    options: PropsOption[]
}
class Select extends React.Component<IPropsInput> {
    constructor(props: IPropsInput) {
        super(props)
    }

    render(): React.ReactNode {
        const { options, textLabel, id, ...rest } = this.props;
        return (
            <div className="flex flex-col">
                <label
                    className="text-gray-900"
                    htmlFor={id}>{textLabel ?? "Label"}</label>
                <select
                    id={id}
                    className="border border-slate-300 p-3 rounded-md w-52 bg-white"
                    {...rest}>
                    {options.map((op, index) => <option key={index} value={op.value}>{op.text}</option>)}
                </select>
            </div>
        )
    }
}

export default Select