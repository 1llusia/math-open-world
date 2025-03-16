import { Label } from "./widgets"

export class Inventory {

    constructor(game , spell_array , currency_object , items_object , src){
        this.game = game
        this.spell_array = spell_array
        this.currency_object = currency_object
        this.items_object = items_object
        this.src = src
        }

    get_new_spell(spell){
        if (!(spell in this.spell_list)){
            this.spell_list.push(spell)
        }   
    }

    get_new_item(item , number){
        if (item in Object.keys(this.items_object)){
            this.items_object[item] += number
        }
        else{
            this.items_object[item] = number
        }
    }

    get_new_currency(currency , number){
        if (currency in Object.keys(this.currency_object)){
            this.currency_object[currency] += number
        }
        else{
            this.currency_object[currency] = number
        }
    }

    open_inventory(){
        load(this.src)
        for (let i = 0 ; i < this.spell_array.length ; i++){
            new Label(this.game, -100, -80-i*30, this.spell_array[i])
        }
        for (let i = 0 ; i < Object.keys(this.currency_object).length ; i++){
            new Label(this.game, 0, -110-i*30, Object.keys(this.currency_object)[i] + " : " + this.currency_object[Object.keys(this.currency_object)[i]])
        }
        for (let i = 0 ; i < Object.keys(this.items_object).length ; i++){
            new Label(this.game, 100, -110-i*30, Object.keys(this.items_object)[i] + " : " + this.items_object[Object.keys(this.items_object)[i]])
        }
    }
}