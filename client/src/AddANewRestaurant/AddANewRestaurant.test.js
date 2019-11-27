import React from 'react';
import AddANewRestaurant from './AddANewRestaurant';

describe('add a new restaurant' , () => {
    const wrapper = <AddANewRestaurant/>;
    const restaurant = 'Momo Sushi';
    const handleSave = jest.fn();
    it('should call handleSave after click save button', () => {
        wrapper.find("form").simulate("submit")
        expect(handleSave).toHaveBeenCalledWith('Momo Sushi')
    });
});

//1. input a new restaurant name
//2. click save button onclick() => handleSave();
//3. handleSave() => get a restaurant name from input and save to a database
