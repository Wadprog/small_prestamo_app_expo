import { View } from 'react-native'
import React, { useState } from 'react'

import { Slider } from '@miblanchard/react-native-slider'

import tw from '../../../../../lib/tailwind'
import Button from '../../../../../components/Button'
import Text from '../../../../../components/Text'

import TimeFilter from './components/TimeFilter'
import CategoryFilter from './components/CategoryFilter'

import Modal from '../../../../../components/Modal'

const FilterModal = ({ visible, OnClose }) => {
  const [category, setCategory] = useState('all')
  const [time, setTime] = useState('today')

  return (
    <Modal visible={visible} OnClose={OnClose}>
      <>
        <View style={tw`flex-1`}>
          <View style={tw`flex flex-row justify-between items-center mt-3`}>
            <CategoryFilter
              text=" All Loans"
              iconName="all-inclusive-box-outline"
              selected={category === 'all'}
              onSelect={() => setCategory('all')}
            />
            <CategoryFilter
              text=" Due Loans"
              iconName="eye-outline"
              selected={category === 'due'}
              onSelect={() => setCategory('due')}
            />
            <CategoryFilter
              text=" Paid Loans"
              iconName="check-all"
              selected={category === 'paid'}
              onSelect={() => setCategory('paid')}
            />
          </View>

          <Text category="h6" style={tw`my-2`}>
            Filter by time created
          </Text>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TimeFilter
              text="Today"
              selected={time === 'today'}
              onSelect={() => setTime('today')}
            />
            <TimeFilter
              text="This Week"
              selected={time === 'week'}
              onSelect={() => setTime('week')}
            />
            <TimeFilter
              text="This Month"
              selected={time === 'month'}
              onSelect={() => setTime('month')}
            />
          </View>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TimeFilter
              text="3 Month"
              selected={time === '3month'}
              onSelect={() => setTime('3month')}
            />
            <TimeFilter
              text="6 Month"
              selected={time === '6month'}
              onSelect={() => setTime('6month')}
            />
            <TimeFilter
              text="1 Year"
              selected={time === '1year'}
              onSelect={() => setTime('1year')}
            />
          </View>

          <Text category="h6" style={tw`my-2`}>
            Filter by price Range
          </Text>
          <View style={tw`  px-3 my-3`}>
            <Slider value={6} onValueChange={console.log} />
          </View>
        </View>

        <View style={tw`flex flex-row justify-between items-center mb-5`}>
          <Button title="Reset" appearance="outline" style={tw`w-[49%]`} />
          <Button title="Apply" style={tw`w-[49%]`} />
        </View>
      </>
    </Modal>
  )
}

export default FilterModal
