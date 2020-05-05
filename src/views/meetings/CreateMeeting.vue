<template>
  <div class="right-content">
    <div>
      <PageLocation :title="title"></PageLocation>
    </div>
    <div class="search-form">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">   
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name" />
          </FormItem>  
          <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name" />
          </FormItem>   
        <!-- <Row :gutter='20'>
          <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name" />
          </FormItem>
        </Row>        -->
        <Row  :gutter='20'>
          <FormItem label="Date">
            <DatePicker
              type="daterange"
              split-panels
              placeholder="Select date"
              style="width: 200px"
            ></DatePicker>
          </FormItem>
        </Row>
        <!-- <FormItem label="Gender" prop="gender"></FormItem> -->
        <!-- <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>-->
      </Form>
    </div>
    <div>
        hahahha
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "CreateMeeting",
  data() {
    return {
      title: "新建会议",

      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  methods: {}
};
</script>

<style  scoped>
.formRegister >>> .ivu-form-item-label {
  color: white;
}
.formRegister >>> .ivu-row {
  height: 10px;
}
.search-form {
  widht: 200px;
  height: 900px;
}
.right-content {
  margin-left: 280px;
  padding-top: 10px;
}
</style>
