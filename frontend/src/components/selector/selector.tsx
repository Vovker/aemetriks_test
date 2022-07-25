import './style.scss';
import React, {useEffect, useState} from "react";
import {NodeTypes, SelectorBlockTypes} from "./selector.types";
import {Input} from "../common/input/input";
import singleArrow from '../../assets/singleArrow.svg';
import doubleArrow from '../../assets/doubleArrow.svg';
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getCarts} from "../../store/actions/carts.action";
import {connect} from "react-redux";

const Selector = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarts())
  }, [dispatch])

  const {carts} = useAppSelector(state => state.carts);

  const [values, setValues] = useState(carts)
  const [pinnedNodes, setPinnedNodes] = useState([0]);

  const setPin = (id:number) => {
    setPinnedNodes([...pinnedNodes, id]);
  }

  const unsetPin = (id:number) => {
    let temp = pinnedNodes;
    for(let i = 0; i < temp.length; i++){
      if(temp[i] === id) {
        temp.splice(i,1);
        i--;
      }
    }
    setPinnedNodes(temp)
  }

  useEffect(() => {
    setValues(carts)
  }, [carts])

  // 0 - UNSELECT ALL
  // 1 - SELECT ALL
  const selectAll = (status: boolean) => {
    setValues(values.map(value => {
      return {
        ...value,
        isSelected: status
      }
    }))
  }

  const selectPinnedNodes = (status: boolean) => {
    setValues(values.map(value => {
      return {
        ...value,
        isSelected: !pinnedNodes.includes(value.id) ? value.isSelected : status
      }
    }))
    setPinnedNodes([0])
  }


  return (
    <>
      <div className={'selector'}>
        <div className={'selector__title'}>Carts</div>
        <div className={'selector__block'}>
          <SelectBlock
            data={values.filter((cart) => !cart.isSelected)}
            setPin={setPin}
            unsetPin={unsetPin}
          />
          <div className={'selector__functional-block'}>
            <button
              className={'selector__functional-block__button selector__functional-block__button--multiple'}
              onClick={() => selectAll(true)}
            >
              <img
                src={doubleArrow}
                className={'selector__functional-block__button__icon'}
                alt={''}
              />
            </button>
            <button
              className={'selector__functional-block__button selector__functional-block__button--single'}
              onClick={() => selectPinnedNodes(true)}
            >
              <img
                src={singleArrow}
                className={'selector__functional-block__button__icon'}
                alt={''}
              />
            </button>
            <button
              className={'selector__functional-block__button selector__functional-block__button--single'}
              onClick={() => selectPinnedNodes(false)}
            >
              <img
                src={singleArrow}
                className={'selector__functional-block__button__icon  selector__functional-block__button__icon--reversed'}
                alt={''}
              />
            </button>
            <button
              className={'selector__functional-block__button selector__functional-block__button--multiple'}
              onClick={() => selectAll(false)}
            >
              <img
                src={doubleArrow}
                className={'selector__functional-block__button__icon selector__functional-block__button__icon--reversed'}
                alt={''}
              />
            </button>
          </div>
          <SelectBlock
            data={values.filter((cart) => cart.isSelected)}
            setPin={setPin}
            unsetPin={unsetPin}
          />
        </div>
      </div>
    </>
  );
}

function mapStateToProps({carts}: any) {
  return carts;
}

export default connect(mapStateToProps)(Selector)

const SelectBlock: React.FC<SelectorBlockTypes> = ({data, setPin, unsetPin}) => {

  const [values, setValues] = useState(data)

  useEffect(() => {
    setValues(data)
  }, [data])

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue)
      setValues(values.filter(value => value.value.includes(searchValue)))
    else
      setValues(data)
  }, [searchValue, data, values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className={'selector__block__select'}>
      <Input
        type={'text'}
        name={'cartSearch'}
        placeholder={'Search for cart'}
        handleChange={handleChange}
      />
      <div className={'selector__block__select__list'}>
        {
          values.map((node: NodeTypes) =>
            <SelectNode
              key={node.id}
              id={node.id}
              value={node.value}
              setPin={setPin}
              unsetPin={unsetPin}
            />
          )
        }
      </div>
    </div>
  )
}

const SelectNode: React.FC<NodeTypes> = ({id, value, setPin, unsetPin}) => {

  const [pinned, setPinned] = useState(false)

  const handleClick = () => {
    setPinned(!pinned)
    if (setPin && unsetPin) {
      !pinned ? setPin(id) : unsetPin(id)
    }
  }
  return (
    <div
      key={id}
      className={`node ${pinned ? 'node--selected' : ''}`}
      onClick={() => handleClick()}
    >
      {value}
    </div>
  );
}
