import React from "react";
import {FilterLablel, Input} from './Filter.styled';

export function Filter ({value, onChange}) {
    return (
        <FilterLablel>
            Find contacts by name
            <Input
            type="text"
            value={value}
            onChange={onChange}
            />
        </FilterLablel>
    )
}