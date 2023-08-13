import { View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import tw from "../lib/tailwind";
import { Form, Field, Submit } from "./form";
import LoadIndicator from "./TransparentLoader";

import { CreateloanRequest, getloanRequests } from "../store/loanRequests";

const ValidationSchema = Yup.object().shape({
  request_amount: Yup.number().required().label("Loan Amount"),
});

const initialValues = {
  request_amount: "",
};

const LoanRequestForm = ({ handleSubmit, formValues, previousForm }) => {
  const dispatch = useDispatch();
  const res = useSelector(getloanRequests);
  const { last_request, loading, error } = res;

  const handleFormSubmit = async (values) => {
    await dispatch(CreateloanRequest({ ...values, ...previousForm }));
  };

  React.useEffect(() => {
    if (last_request && !loading && !error) {
      handleSubmit({ loan_request_id: last_request.id });
    }
    return () => {
      console.log("clearing the current loan_request");
    };
  }, [last_request, loading, error]);

  return (
    <>
      {loading ? (
        <LoadIndicator />
      ) : (
        <Form
          validationSchema={ValidationSchema}
          initialValues={formValues || initialValues}
          onSubmit={handleFormSubmit}
        >
          <View style={tw`flex h-[100%]`}>
            <View style={tw`h-[80%]`}>
              <Field
                required
                placeholder="Request Amount"
                name="request_amount"
                type="number"
              />
            </View>
            <View style={tw`bg-blue-500 mb-5`}>
              <Submit title="Next" />
            </View>
          </View>
        </Form>
      )}
    </>
  );
};

export default LoanRequestForm;
