import { View } from 'react-native'
import React, { useState } from 'react'
import startOfWeek from 'date-fns/startOfWeek'
import startOfMonth from 'date-fns/startOfMonth'
import startOfYear from 'date-fns/startOfYear'
import subMonths from 'date-fns/subMonths'
import { Slider } from '@miblanchard/react-native-slider'

import tw from '../../../../../lib/tailwind'
import Button from '../../../../../components/Button'
import Text from '../../../../../components/Text'

import TimeFilter from './components/TimeFilter'
import CategoryFilter from './components/CategoryFilter'
import SliderContainer from '../../../../../components/SliderContainer'
import Modal from '../../../../../components/Modal'

const FilterModal = ({
  visible,
  OnClose,
  onFilerAdd,
  onFilterRemove,
  onDoneFiltering,
}) => {
  const [category, setCategory] = useState('')
  const [time, setTime] = useState('')

  return (
    <Modal visible={visible} OnClose={OnClose}>
      <>
        <View style={tw`flex-1`}>
          <View style={tw`flex flex-row justify-between items-center mt-3`}>
            <CategoryFilter
              text=" All Loans"
              iconName="all-inclusive-box-outline"
              selected={category === 'all'}
              onSelect={() => {
                setCategory('all')
                onFilterRemove(['loan_status'])
              }}
            />
            <CategoryFilter
              text=" Due Loans"
              iconName="eye-outline"
              selected={category === 'due'}
              onSelect={() => {
                setCategory('due')
                onFilterRemove(['loan_status'])
                onFilerAdd({ loan_status: 'active' })
              }}
            />
            <CategoryFilter
              text=" Paid Loans"
              iconName="check-all"
              selected={category === 'paid'}
              onSelect={() => {
                setCategory('paid')
                onFilterRemove(['loan_status'])
                onFilerAdd({ loan_status: 'paid' })
              }}
            />
          </View>

          <Text category="h6" style={tw`my-2`}>
            Filter by time created
          </Text>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TimeFilter
              text="Today"
              selected={time === 'today'}
              onSelect={() => {
                setTime('today')
                onFilterRemove(['created_at'])
                onFilerAdd({ created_at: new Date() })
              }}
            />
            <TimeFilter
              text="This Week"
              selected={time === 'week'}
              onSelect={() => {
                setTime('week')
                onFilterRemove(['created_at[$lte]', 'created_at[$gte]'])
                onFilerAdd({
                  'created_at[$lte]': new Date(),
                  'created_at[$gte]': startOfWeek(new Date()),
                })
              }}
            />
            <TimeFilter
              text="This Month"
              selected={time === 'month'}
              onSelect={() => {
                setTime('month')
                onFilterRemove(['created_at[$lte]', 'created_at[$gte]'])
                onFilerAdd({
                  'created_at[$lte]': new Date(),
                  'created_at[$gte]': startOfMonth(new Date()),
                })
              }}
            />
          </View>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TimeFilter
              text="3 Month"
              selected={time === '3month'}
              onSelect={() => {
                setTime('3month')
                onFilterRemove(['created_at[$lte]', 'created_at[$gte]'])
                onFilerAdd({
                  'created_at[$lte]': new Date(),
                  'created_at[$gte]': subMonths(new Date(), 3),
                })
              }}
            />
            <TimeFilter
              text="6 Month"
              selected={time === '6month'}
              onSelect={() => {
                setTime('6month')
                onFilterRemove(['created_at[$lte]', 'created_at[$gte]'])
                onFilerAdd({
                  'created_at[$lte]': new Date(),
                  'created_at[$gte]': subMonths(new Date(), 6),
                })
              }}
            />
            <TimeFilter
              text="1 Year"
              selected={time === '1year'}
              onSelect={() => {
                setTime('1year')
                onFilterRemove(['created_at[$lte]', 'created_at[$gte]'])
                onFilerAdd({
                  'created_at[$lte]': new Date(),
                  'created_at[$gte]': startOfYear(new Date()),
                })
              }}
            />
          </View>

          <Text category="h6" style={tw`my-2`}>
            Filter by price Range
          </Text>
          <View style={tw`  px-3 my-3`}>
            <SliderContainer
              sliderValue={[100, 900]}
              onValueChange={([left, right]) => {
                onFilterRemove(['debt_balance[$gte]', 'debt_balance[$lte]'])
                onFilerAdd({
                  'debt_balance[$gte]': left,
                  'debt_balance[$lte]': right,
                })
                console.log({ left, right })
              }}
            >
              <Slider
                animateTransitions
                maximumTrackTintColor={tw.color('color-primary-400')}
                maximumValue={800}
                minimumTrackTintColor={tw.color('color-primary-200')}
                minimumValue={50}
                step={2}
                thumbTintColor={tw.color('color-primary-500')}
              />
            </SliderContainer>
          </View>
        </View>

        <View style={tw`flex flex-row justify-between items-center mb-5`}>
          <Button
            title="Reset"
            appearance="outline"
            style={tw`w-[49%]`}
            onPress={() => {
              setTime(null)
              setCategory(null)
              onFilterRemove([
                'debt_balance[$gte]',
                'debt_balance[$lte]',
                'loan_status',
                'created_at',
                'created_at[$lt]',
                'created_at[$lte]',
                'created_at[$gt]',
                'created_at[$gte]',
              ])
            }}
          />
          <Button
            title="Apply"
            style={tw`w-[49%]`}
            onPress={() => {
              onDoneFiltering()
              OnClose()
            }}
          />
        </View>
      </>
    </Modal>
  )
}

export default FilterModal
