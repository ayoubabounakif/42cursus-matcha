<template>
  <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error"> {{ passwordError }} </div>

      <label>Role:</label>
      <select v-model="role" class="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designerr</option>
      </select>

      <br>

      <label>Skills:</label>
      <input type="text" v-model="skill" @keyup="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="removeSkill(skill)"> {{ skill }}</span>
        </div>

      <!-- <div class="group-terms">
          <input type="checkbox" value="oussama" required v-model="names">
          <label>Oussama</label><br>
          <input type="checkbox" value="amine" required v-model="names">
          <label>Amine</label><br>
          <input type="checkbox" value="zack" required v-model="names">
          <label>Zack</label>
      </div> -->
        
      <div class="terms">
        <input type="checkbox" required v-model="tos">
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
          <button>Create an account</button>
      </div>
  </form>

  <p> Email: {{ email }}</p>
  <p> Password: {{ password }}</p>
  <p> Role: {{ role }}</p>
  <p> Terms of Services: {{ tos }}</p>
  <!-- <p> Names: {{ names }}</p> -->
  <!-- <p> Skills: {{ skills }}</p> -->

</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            tos: false,
            names: [],
            skill: '',
            skills: [],
            passwordError: '',
        }
    },
    methods: {
        addSkill(e) {
            console.log(this.skill);
            if (e.key === "Enter" && this.skill) {
                if (!this.skills.includes(this.skill)) {
                    console.log(e); 
                    this.skills.push(this.skill);
                }
                this.skill = '';
            }
        },
        removeSkill(skill) {
            /* for (var i = 0; i < this.skills.length; i++) {
                if (this.skills[i] === skill) {
                    this.skills.splice(i, 1);
                    i--;
                }
            } */
            this.skills = this.skills.filter((ele) => {
                return skill !== ele
            })
        },
        handleSubmit() {
            // Validate password
            this.passwordError = this.password.length > 5 ? '' : "Password len must be greater than 5 characters";
            if (!this.passwordError) {
                console.log('email: ', this.email);
                console.log('password: ', this.password);
                console.log('role: ', this.role);
                console.log('tos: ', this.tos);
                console.log('skills: ', this.skills);
            }
            // console.log('Form submitted');
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.group-terms label {
    margin-top: 30px;
    margin-bottom: 0;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
.submit {
    text-align: center;
}
.submit button {
    background: blue;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
.role {
    color: blue;
    margin-left: 10px;
}
</style>