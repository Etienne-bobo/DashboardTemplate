
<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar />

      <div class="w-full bg-white pl-0 lg:pl-64  min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="lg:px-24 px-6 py-6 mb-20">
          <span class="font-bold text-4xl">Settings</span>
          <div class="mb-8">
              <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-4 px-4 text-blue-700 font-semibold" href="#">General</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-4 px-4  hover:text-blue-800 " href="#">Password</a>
                </li>
               <li class="mr-1">
                    <a class="bg-white inline-block py-4 px-4 hover:text-blue-800 " href="#">Notifications</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-4 px-4  hover:text-blue-800 " href="#">Plan</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-4 px-4 hover:text-blue-800 " href="#">Billing</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-4 px-4 hover:text-blue-800" href="#">Team Members</a>
                </li>
              </ul>
          </div>
          <div>
              <span class="mt-8 text-2xl font-semibold">Profile</span> 
              <div>
                <span class="text-gray-700">This information will be displayed pubicily so be careful what you share</span>
              </div>
              
          </div>
         <div>
        <div class="flex justify-center py-10">
            <div class="w-full">
                <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div class="py-3 text-sm">
                        <div class="flex border-b border-t py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Name</div>
                            <div class="flex-grow font-medium px-2">Tighten Co.</div>
                            <div class="text-sm font-normal text-indigo-500 tracking-wide">Upadte</div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Photo</div>
                            <div class="flex-grow font-medium px-2">Taylor Otwell</div>
                            <div class="text-sm font-normal text-indigo-500 tracking-wide">Update</div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Email</div>
                            <div class="flex-grow font-medium px-2">AdamWathan@gmail.com</div>
                            <div class="text-sm font-normal text-indigo-500 border-r-2 px-2 tracking-wide">Update</div>
                            <div class="text-sm font-normal text-indigo-500 pl-2 tracking-wide">Remove</div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer  hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Job title</div>
                            <div class="flex-grow font-medium px-2">Human ressources manager.</div>
                            <div class="text-sm font-normal text-indigo-500 tracking-wide">Update</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
              <span class="mt-8 text-2xl font-semibold">Account</span> 
              <div>
                <span class="text-gray-700">This information will be displayed pubicily so be careful what you share</span>
              </div>
              
          </div>
        <div class="flex justify-center py-10">
            <div class="w-full">
                <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div class="py-3 text-sm">
                        <div class="flex border-b border-t py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Language</div>
                            <div class="flex-grow font-medium px-2">English</div>
                            <div class="text-sm font-normal text-indigo-500 tracking-wide">Upadte</div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Date format</div>
                            <div class="flex-grow font-medium px-2">DD-MM-YYYY</div>
                            <div class="text-sm font-normal text-indigo-500 tracking-wide">Update</div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Automatic timezone</div>
                            <div class="text-sm font-normal text-indigo-500 pl-2 tracking-wide">
                                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle1" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                    <label for="toggle1" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                        </div>
                        <div class="flex border-b py-6 justify-start cursor-pointer  hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 my-2">
                            <div class="flex-grow text-gray-700 font-medium px-2">Auto-update applicant data</div>
                            <div class="text-sm font-normal text-indigo-500 pl-2 tracking-wide">
                                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Sidebar,
    Navbar,
  }
}
</script>
<style lang="postcss">
.toggle-checkbox:checked {
  @apply right-0 border-green-400;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-green-400;
  background-color: #68D391;
}
</style>