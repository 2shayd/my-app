import { Formik } from "formik";
import * as Yup from "yup";
import { useEntryContext } from "@/components/ui/entry-context-provider";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { useNavigation } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { B } from "@expo/html-elements";

const entrySchema = Yup.object().shape({
  startDate: Yup.string().required("Start date is required"),
  startTime: Yup.string().required("Start time is required"),
  scaleRating: Yup.number()
    .transform((value, originalValue) => originalValue === "" ? undefined : value)
    .typeError("Scale rating must be a number")
    .min(0, "Rating must be at least 0")
    .max(10, "Rating cannot exceed 10")
    .required("Scale rating is required"),
});

const AddEntry = () => {
  const navigation = useNavigation();
  const { addEntry } = useEntryContext();

  return (
    <Box className="flex-1 p-4 dark:bg-gray-900 dark:text-white">
      <Formik
        initialValues={{
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
          scaleRating: "",
          // symptoms: [],
        }}
        validationSchema={entrySchema}
        onSubmit={(values, { resetForm }) => {
          //add the entry to the context
          addEntry({
            id: Date.now(), //generate a unique id by the timestamp
            startDate: values.startDate,
            startTime: values.startTime,
            endDate: values.endDate,
            endTime: values.endTime,
            scaleRating: Number(values.scaleRating),
            // symptoms: values.symptoms,
          });

          resetForm(); //reset the form after submission
          navigation.goBack(); //go back to the previous screen
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Box>
              {/* add inputs */}
              <Box className="mb-4">
                <Text size="lg" className="mb-2 text-stone-900 dark:text-white">
                  Add New Entry
                </Text>
                <Input
                  variant="outline"
                  size="md"
                  className="bg-white dark:bg-zinc-900 mt-2"
                >
                  <InputField
                    onChangeText={handleChange("startDate")}
                    onBlur={handleBlur("startDate")}
                    value={values.startDate}
                    placeholder="Start Date"
                  />
                </Input>
                {errors.startDate && touched.startDate && (
                  <Text size="sm" className="text-red-500">
                    {errors.startDate}
                  </Text>
                )}
              </Box>
            </Box>
            <Box>
              <Input
                variant="outline"
                size="md"
                className="bg-white dark:bg-zinc-900 mt-2"
              >
                <InputField
                  onChangeText={handleChange("startTime")}
                  onBlur={handleBlur("startTime")}
                  value={values.startTime}
                  placeholder="Start Time"
                />
              </Input>
              {errors.startTime && touched.startTime && (
                <Text size="sm" className="text-red-500">
                  {errors.startTime}
                </Text>
              )}
            </Box>
            <Box>
              <Input
                variant="outline"
                size="md"
                className="bg-white dark:bg-zinc-900 mt-2"
              >
                <InputField
                  onChangeText={handleChange("endDate")}
                  onBlur={handleBlur("endDate")}
                  value={values?.endDate}
                  placeholder="End Date"
                />
              </Input>
              {errors.endDate && touched.endDate && (
                <Text size="sm" className="text-red-500">
                  {errors.endDate}
                </Text>
              )}
            </Box>
            <Box>
              <Input
                variant="outline"
                size="md"
                className="bg-white dark:bg-zinc-900 mt-2"
              >
                <InputField
                  onChangeText={handleChange("endTime")}
                  onBlur={handleBlur("endTime")}
                  value={values?.endTime}
                  placeholder="End Time"
                />
              </Input>
              {errors.endTime && touched.endTime && (
                <Text size="sm" className="text-red-500">
                  {errors.endTime}
                </Text>
              )}
            </Box>
            <Box>
              <Input
                variant="outline"
                size="md"
                className="bg-white dark:bg-zinc-900 mt-2"
              >
                <InputField
                  onChangeText={handleChange("scaleRating")}
                  onBlur={handleBlur("scaleRating")}
                  value={values.scaleRating.toString()}
                  placeholder="Pain Rating (0-10)"
                  keyboardType="numeric"
                />
              </Input>
              {errors.scaleRating && touched.scaleRating && (
                <Text size="sm" className="text-red-500">
                  {errors.scaleRating}
                </Text>
              )}
            </Box>
            <Button onPress={handleSubmit as any} className="mt-6" variant="solid">
              <ButtonText>Save Entry</ButtonText>
              </Button>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default AddEntry;

