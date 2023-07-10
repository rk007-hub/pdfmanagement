import React from "react";

const ForgotPassword = ({onBackgroundClick}) => {
  return (
    // <div class="fixed top-0 left-0 w-full h-full flex justify-center  items-center bg-black bg-opacity-50">
    // <body class="font-mono min-w-[70%] mt-20">
	
	// 	<div class="container mx-auto">
	// 		<div class="flex justify-center px-6 my-12">
				
	// 			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					
	// 				<div
	// 					class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						
    //                     style={{backgroundImage:`url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`}}
	// 				></div>
				
	// 				<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
	// 					<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
	// 					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
	// 						<div class="mb-4 md:flex md:justify-between">
	// 							<div class="mb-4 md:mr-2 md:mb-0">
	// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
	// 									First Name
	// 								</label>
	// 								<input
	// 									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
	// 									id="firstName"
	// 									type="text"
	// 									placeholder="First Name"
	// 								/>
	// 							</div>
	// 							<div class="md:ml-2">
	// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
	// 									Last Name
	// 								</label>
	// 								<input
	// 									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
	// 									id="lastName"
	// 									type="text"
	// 									placeholder="Last Name"
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div class="mb-4">
	// 							<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
	// 								Email
	// 							</label>
	// 							<input
	// 								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
	// 								id="email"
	// 								type="email"
	// 								placeholder="Email"
	// 							/>
	// 						</div>
	// 						<div class="mb-4 md:flex md:justify-between">
	// 							<div class="mb-4 md:mr-2 md:mb-0">
	// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
	// 									Password
	// 								</label>
	// 								<input
	// 									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
	// 									id="password"
	// 									type="password"
	// 									placeholder="******************"
	// 								/>
	// 								<p class="text-xs italic text-red-500">Please choose a password.</p>
	// 							</div>
	// 							<div class="md:ml-2">
	// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
	// 									Confirm Password
	// 								</label>
	// 								<input
	// 									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
	// 									id="c_password"
	// 									type="password"
	// 									placeholder="******************"
	// 								/>
	// 							</div>
	// 						</div>
	// 						<div class="mb-6 text-center">
	// 							<button
	// 								class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
	// 								type="button"
	// 							>
	// 								Register Account
	// 							</button>
	// 						</div>
	// 						<hr class="mb-6 border-t" />
	// 						<div class="text-center">
	// 							<a
	// 								class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
	// 								href="#"
	// 							>
	// 								Forgot Password?
	// 							</a>
	// 						</div>
	// 						<div class="text-center">
	// 							<a
	// 								class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
	// 								href="./index.html"
	// 							>
	// 								Already have an account? Login!
	// 							</a>
	// 						</div>
	// 					</form>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </body>
    // </div>
//     <div class="fixed top-0 left-0 w-full h-full flex justify-center  items-center bg-black bg-opacity-50">
//     <body class="font-mono  min-w-[70%]">
		
// 		<div class="container mx-auto  ">
// 			<div class="flex justify-center px-6 my-12">
				
// 				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					
// 					<div
// 						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						
//                         style={{backgroundImage:`url('https://source.unsplash.com/K4mSJ7kc0As/600x800')`}}
// 					></div>
					
// 					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
// 						<h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
// 						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
// 							<div class="mb-4">
// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
// 									Username
// 								</label>
// 								<input
// 									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// 									id="username"
// 									type="text"
// 									placeholder="Username"
// 								/>
// 							</div>
// 							<div class="mb-4">
// 								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
// 									Password
// 								</label>
// 								<input
// 									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
// 									id="password"
// 									type="password"
// 									placeholder="******************"
// 								/>
// 								<p class="text-xs italic text-red-500">Please choose a password.</p>
// 							</div>
// 							<div class="mb-4">
// 								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
// 								<label class="text-sm" for="checkbox_id">
// 									Remember Me
// 								</label>
// 							</div>
// 							<div class="mb-6 text-center">
// 								<button
// 									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
// 									type="button"
// 								>
// 									Sign In
// 								</button>
// 							</div>
// 							<hr class="mb-6 border-t" />
// 							<div class="text-center">
// 								<a
// 									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
// 									href="#"
// 								>
// 									Create an Account!
// 								</a>
// 							</div>
// 							<div class="text-center">
// 								<a
// 									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
// 									href="#"
// 								>
// 									Forgot Password?
// 								</a>
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</body>
// </div>
//     <div class="fixed top-0 left-0 w-full h-full flex justify-center  items-center bg-black bg-opacity-50">
//   <div class="p-8 lg:w-1/2 mx-auto">
//     <div class="bg-white rounded-t-lg p-8">
//       <p class="text-center text-sm text-gray-400 font-light">Sign in with</p>
//       <div>
//         <div class="flex items-center justify-center space-x-4 mt-3">
//           <button
//             class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               class="w-6 h-6 mr-3"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
//               ></path>
//             </svg>
//             Github
//           </button>
//           <button
//             class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="w-6 h-6 mr-3"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#fbc02d"
//                 d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//               />
//               <path
//                 fill="#e53935"
//                 d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//               />
//               <path
//                 fill="#4caf50"
//                 d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//               />
//               <path
//                 fill="#1565c0"
//                 d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//               />
//             </svg>
//             Google
//           </button>
//         </div>
//       </div>
//     </div>
//     <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
//       <p class="text-center text-sm text-gray-500 font-light">
//         Or sign in with credentials
//       </p>
//       <form class="mt-6">
//         <div class="relative">
//           <input
//             class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
//             id="name"
//             type="text"
//             placeholder="Name"
//           />
//           <div class="absolute left-0 inset-y-0 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-7 w-7 ml-3 text-gray-400 p-1"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
//               />
//               <path
//                 d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
//               />
//             </svg>
//           </div>
//         </div>
//         <div class="relative mt-3">
//           <input
//             class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
//             id="email"
//             type="Email"
//             placeholder="Email"
//           />
//           <div class="absolute left-0 inset-y-0 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-7 w-7 ml-3 text-gray-400 p-1"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
//               />
//               <path
//                 d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
//               />
//             </svg>
//           </div>
//         </div>
//         <div class="relative mt-3">
//           <input
//             class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
//             id="pass"
//             type="Password"
//             placeholder="Password"
//           />
//           <div class="absolute left-0 inset-y-0 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-7 w-7 ml-3 text-gray-400 p-1"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
//               />
//             </svg>
//           </div>
//         </div>
//         <div class="mt-4 flex items-center text-gray-500">
//           <input type="checkbox" id="remember" name="remember" class="mr-3" />
//           <label for="remember">Remember me</label>
//         </div>
//         <div class="flex items-center justify-center mt-8">
//           <button
//             class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
<div class="fixed top-0 left-0 w-full h-full flex justify-center  items-center bg-black bg-opacity-50" >
<body class="font-mono ">
		
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			
			<div class="relative w-full xl:w-3/4 lg:w-11/12 flex">
				<button className="absolute top-0 right-1 text-gray-500 hover:text-gray-800" onClick={onBackgroundClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
						fillRule="evenodd"
						d="M13.414 12l3.536 3.536-1.414 1.414-3.536-3.536-3.536 3.536-1.414-1.414 3.536-3.536-3.536-3.536 1.414-1.414 3.536 3.536 3.536-3.536 1.414 1.414-3.536 3.536z"
						clipRule="evenodd"
						/>
					</svg>
		  
        		</button>
				
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						
                        style={{backgroundImage:`url('https://source.unsplash.com/oWTW-jNGl9I/600x800')`}}
					></div>
					
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p class="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and well send you a
								link to reset your password!
							</p>
						</div>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
								/>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Reset Password
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
</div>
  );
};

export default ForgotPassword;

