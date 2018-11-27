
import { loadCharacters } from '../actions';
import { type } from 'os';
import { format } from 'util';

export type renderNumbersFunction = () => FindDisplayNumbersFunction

type pageNumbersFunction = (a: number, b: number) =>


    // a function that takes a single number and returns an array of numbers
    type FindDisplayNumbersFunction = (a: number) => Array<numbers>