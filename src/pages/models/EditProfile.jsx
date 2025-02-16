import { CameraIcon, MailIcon, SaveIcon, UserIcon } from "lucide-react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../images/Edit Profile/bg.jpeg"; //bg.jpg

const EditProfile = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    division: "",
    zipCode: "",
    occupation: "",
    company: "",
    companyLocation: "",
    aboutMe: "",
  });
  const [errors, setErrors] = useState({});

  // Create refs for the sections
  const personalInfoRef = useRef(null);
  const emailPasswordRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // You can add additional logic here to process the file (e.g., upload to server)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSavePassword = (e) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Password fields cannot be empty.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    toast.success("Password saved successfully!");
    // Add logic to save password here
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.division) newErrors.division = "Division is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.companyLocation)
      newErrors.companyLocation = "Company location is required";
    if (!formData.aboutMe) newErrors.aboutMe = "About me is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with saving the data
      toast.success("Profile information saved successfully!");
      // Add your save logic here
    } else {
      // Form has errors, show them
      setErrors(newErrors);
      toast.error("Please fix the errors before saving.");
    }
  };


  return (
    <div className="relative min-h-screen mt-[50px]">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start p-4 lg:p-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-90 bg-white rounded-lg shadow-md p-6 lg:p-8 space-y-4 mb-4 lg:mb-0">
          <h2
            style={{ color: "var(--color-primaryText)" }}
            className="text-xl font-bold "
          >
            Profile management
          </h2>
          <div className="space-y-2">
            {/* Button with User Icon for Personal Information */}
            <button
              onClick={() => scrollToSection(personalInfoRef)} // Scroll to Personal Info
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-left focus:outline-none focus:border-blue-500 flex items-center space-x-2"
            >
              <UserIcon className="w-5 h-5 text-gray-500" />
              <span>Personal information</span>
            </button>
            {/* Button with Mail Icon for Email and Password */}
            <button
              onClick={() => scrollToSection(emailPasswordRef)} // Scroll to Email and Password
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-left focus:outline-none focus:border-blue-500 flex items-center space-x-2"
            >
              <MailIcon className="w-5 h-5 text-gray-500" />
              <span>Email and password</span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:ml-8 lg:flex-1 space-y-8">
          {/* Personal Information Section */}
          <div
            ref={personalInfoRef}
            className="bg-white rounded-lg lg:rounded-2xl shadow-md p-6 lg:p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2
                style={{ color: "var(--color-primaryText)" }}
                className="text-xl font-bold mb-4 lg:mb-0"
              >
                Personal information
              </h2>
              <button
                style={{
                  backgroundColor: "var(--color-primaryBlue)",
                  borderRadius: "0.5rem",
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center space-x-2"
                onClick={handleSubmit}
              >
                <SaveIcon className="w-5 h-5" />
                <span>Save info</span>
              </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-20">
              {/* Image Column */}
              <div className="flex flex-col items-center">
                <label
                  htmlFor="profile-image"
                  className="relative w-24 h-24 lg:w-34 lg:h-34 rounded-full overflow-hidden mb-4 cursor-pointer"
                >
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "/src/assets/Edit Profile/profile.jpg"
                    }
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <CameraIcon className="w-6 h-6 text-white" />
                  </div>
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <button
                  className="text-sm text-blue-500"
                  onClick={() =>
                    document.getElementById("profile-image").click()
                  }
                >
                  Update Profile
                </button>
              </div>

              {/* Vertical Line Column */}
              <div className="hidden lg:flex justify-center">
                <div className="w-px bg-gray-300 h-full"></div>
              </div>

              {/* Form Column */}
              <form className="w-full space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className={`border border-gray-300 rounded-lg p-2 w-full ${
                      errors.firstName && "border-red-500"
                    }`}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Last name"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.lastName && "border-red-500"
                    }`}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.email && "border-red-500"
                    }`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                  <div className="flex">
                    <select
                      className="border border-gray-300 rounded-l-md p-2 w-1/3 lg:w-35"
                      name="phonePrefix"
                      value={formData.phonePrefix}
                      onChange={handleChange}
                    >
                      <option value="+93">Afghanistan (+93)</option>
                      <option value="+355">Albania (+355)</option>
                      <option value="+213">Algeria (+213)</option>
                      <option value="+1">American Samoa (+1)</option>
                      <option value="+376">Andorra (+376)</option>
                      <option value="+244">Angola (+244)</option>
                      <option value="+1">Anguilla (+1)</option>
                      <option value="+1">Antigua and Barbuda (+1)</option>
                      <option value="+54">Argentina (+54)</option>
                      <option value="+374">Armenia (+374)</option>
                      <option value="+297">Aruba (+297)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+43">Austria (+43)</option>
                      <option value="+994">Azerbaijan (+994)</option>
                      <option value="+1">Bahamas (+1)</option>
                      <option value="+973">Bahrain (+973)</option>
                      <option value="+880">Bangladesh (+880)</option>
                      <option value="+1">Barbados (+1)</option>
                      <option value="+375">Belarus (+375)</option>
                      <option value="+32">Belgium (+32)</option>
                      <option value="+501">Belize (+501)</option>
                      <option value="+229">Benin (+229)</option>
                      <option value="+1">Bermuda (+1)</option>
                      <option value="+975">Bhutan (+975)</option>
                      <option value="+591">Bolivia (+591)</option>
                      <option value="+387">
                        Bosnia and Herzegovina (+387)
                      </option>
                      <option value="+267">Botswana (+267)</option>
                      <option value="+55">Brazil (+55)</option>
                      <option value="+1">British Virgin Islands (+1)</option>
                      <option value="+673">Brunei (+673)</option>
                      <option value="+359">Bulgaria (+359)</option>
                      <option value="+226">Burkina Faso (+226)</option>
                      <option value="+257">Burundi (+257)</option>
                      <option value="+855">Cambodia (+855)</option>
                      <option value="+237">Cameroon (+237)</option>
                      <option value="+1">Canada (+1)</option>
                      <option value="+238">Cape Verde (+238)</option>
                      <option value="+1">Cayman Islands (+1)</option>
                      <option value="+236">
                        Central African Republic (+236)
                      </option>
                      <option value="+235">Chad (+235)</option>
                      <option value="+56">Chile (+56)</option>
                      <option value="+86">China (+86)</option>
                      <option value="+57">Colombia (+57)</option>
                      <option value="+269">Comoros (+269)</option>
                      <option value="+242">Congo (+242)</option>
                      <option value="+682">Cook Islands (+682)</option>
                      <option value="+506">Costa Rica (+506)</option>
                      <option value="+385">Croatia (+385)</option>
                      <option value="+53">Cuba (+53)</option>
                      <option value="+357">Cyprus (+357)</option>
                      <option value="+420">Czech Republic (+420)</option>
                      <option value="+45">Denmark (+45)</option>
                      <option value="+253">Djibouti (+253)</option>
                      <option value="+1">Dominica (+1)</option>
                      <option value="+1">Dominican Republic (+1)</option>
                      <option value="+593">Ecuador (+593)</option>
                      <option value="+20">Egypt (+20)</option>
                      <option value="+503">El Salvador (+503)</option>
                      <option value="+240">Equatorial Guinea (+240)</option>
                      <option value="+291">Eritrea (+291)</option>
                      <option value="+372">Estonia (+372)</option>
                      <option value="+251">Ethiopia (+251)</option>
                      <option value="+500">Falkland Islands (+500)</option>
                      <option value="+298">Faroe Islands (+298)</option>
                      <option value="+679">Fiji (+679)</option>
                      <option value="+358">Finland (+358)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+594">French Guiana (+594)</option>
                      <option value="+689">French Polynesia (+689)</option>
                      <option value="+241">Gabon (+241)</option>
                      <option value="+220">Gambia (+220)</option>
                      <option value="+995">Georgia (+995)</option>
                      <option value="+49">Germany (+49)</option>
                      <option value="+233">Ghana (+233)</option>
                      <option value="+350">Gibraltar (+350)</option>
                      <option value="+30">Greece (+30)</option>
                      <option value="+299">Greenland (+299)</option>
                      <option value="+1">Grenada (+1)</option>
                      <option value="+590">Guadeloupe (+590)</option>
                      <option value="+1">Guam (+1)</option>
                      <option value="+502">Guatemala (+502)</option>
                      <option value="+44">Guernsey (+44)</option>
                      <option value="+224">Guinea (+224)</option>
                      <option value="+245">Guinea-Bissau (+245)</option>
                      <option value="+592">Guyana (+592)</option>
                      <option value="+509">Haiti (+509)</option>
                      <option value="+504">Honduras (+504)</option>
                      <option value="+852">Hong Kong (+852)</option>
                      <option value="+36">Hungary (+36)</option>
                      <option value="+354">Iceland (+354)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+62">Indonesia (+62)</option>
                      <option value="+98">Iran (+98)</option>
                      <option value="+964">Iraq (+964)</option>
                      <option value="+353">Ireland (+353)</option>
                      <option value="+44">Isle of Man (+44)</option>
                      <option value="+972">Israel (+972)</option>
                      <option value="+39">Italy (+39)</option>
                      <option value="+1">Jamaica (+1)</option>
                      <option value="+81">Japan (+81)</option>
                      <option value="+44">Jersey (+44)</option>
                      <option value="+962">Jordan (+962)</option>
                      <option value="+7">Kazakhstan (+7)</option>
                      <option value="+254">Kenya (+254)</option>
                      <option value="+686">Kiribati (+686)</option>
                      <option value="+965">Kuwait (+965)</option>
                      <option value="+996">Kyrgyzstan (+996)</option>
                      <option value="+856">Laos (+856)</option>
                      <option value="+371">Latvia (+371)</option>
                      <option value="+961">Lebanon (+961)</option>
                      <option value="+266">Lesotho (+266)</option>
                      <option value="+231">Liberia (+231)</option>
                      <option value="+218">Libya (+218)</option>
                      <option value="+423">Liechtenstein (+423)</option>
                      <option value="+370">Lithuania (+370)</option>
                      <option value="+352">Luxembourg (+352)</option>
                      <option value="+853">Macau (+853)</option>
                      <option value="+389">Macedonia (+389)</option>
                      <option value="+261">Madagascar (+261)</option>
                      <option value="+265">Malawi (+265)</option>
                      <option value="+60">Malaysia (+60)</option>
                      <option value="+960">Maldives (+960)</option>
                      <option value="+223">Mali (+223)</option>
                      <option value="+356">Malta (+356)</option>
                      <option value="+692">Marshall Islands (+692)</option>
                      <option value="+596">Martinique (+596)</option>
                      <option value="+222">Mauritania (+222)</option>
                      <option value="+230">Mauritius (+230)</option>
                      <option value="+262">Mayotte (+262)</option>
                      <option value="+52">Mexico (+52)</option>
                      <option value="+691">Micronesia (+691)</option>
                      <option value="+373">Moldova (+373)</option>
                      <option value="+377">Monaco (+377)</option>
                      <option value="+976">Mongolia (+976)</option>
                      <option value="+382">Montenegro (+382)</option>
                      <option value="+1">Montserrat (+1)</option>
                      <option value="+212">Morocco (+212)</option>
                      <option value="+258">Mozambique (+258)</option>
                      <option value="+95">Myanmar (+95)</option>
                      <option value="+264">Namibia (+264)</option>
                      <option value="+674">Nauru (+674)</option>
                      <option value="+977">Nepal (+977)</option>
                      <option value="+31">Netherlands (+31)</option>
                      <option value="+599">Netherlands Antilles (+599)</option>
                      <option value="+687">New Caledonia (+687)</option>
                      <option value="+64">New Zealand (+64)</option>
                      <option value="+505">Nicaragua (+505)</option>
                      <option value="+227">Niger (+227)</option>
                      <option value="+234">Nigeria (+234)</option>
                      <option value="+683">Niue (+683)</option>
                      <option value="+672">Norfolk Island (+672)</option>
                      <option value="+1">Northern Mariana Islands (+1)</option>
                      <option value="+47">Norway (+47)</option>
                      <option value="+968">Oman (+968)</option>
                      <option value="+92">Pakistan (+92)</option>
                      <option value="+680">Palau (+680)</option>
                      <option value="+970">Palestine (+970)</option>
                      <option value="+507">Panama (+507)</option>
                      <option value="+675">Papua New Guinea (+675)</option>
                      <option value="+595">Paraguay (+595)</option>
                      <option value="+51">Peru (+51)</option>
                      <option value="+63">Philippines (+63)</option>
                      <option value="+48">Poland (+48)</option>
                      <option value="+351">Portugal (+351)</option>
                      <option value="+1">Puerto Rico (+1)</option>
                      <option value="+974">Qatar (+974)</option>
                      <option value="+242">Republic of the Congo (+242)</option>
                      <option value="+262">Reunion (+262)</option>
                      <option value="+40">Romania (+40)</option>
                      <option value="+7">Russia (+7)</option>
                      <option value="+250">Rwanda (+250)</option>
                      <option value="+590">Saint Barthelemy (+590)</option>
                      <option value="+290">Saint Helena (+290)</option>
                      <option value="+1">Saint Kitts and Nevis (+1)</option>
                      <option value="+1">Saint Lucia (+1)</option>
                      <option value="+590">Saint Martin (+590)</option>
                      <option value="+508">
                        Saint Pierre and Miquelon (+508)
                      </option>
                      <option value="+1">
                        Saint Vincent and the Grenadines (+1)
                      </option>
                      <option value="+685">Samoa (+685)</option>
                      <option value="+378">San Marino (+378)</option>
                      <option value="+239">Sao Tome and Principe (+239)</option>
                      <option value="+966">Saudi Arabia (+966)</option>
                      <option value="+221">Senegal (+221)</option>
                      <option value="+381">Serbia (+381)</option>
                      <option value="+248">Seychelles (+248)</option>
                      <option value="+232">Sierra Leone (+232)</option>
                      <option value="+65">Singapore (+65)</option>
                      <option value="+421">Slovakia (+421)</option>
                      <option value="+386">Slovenia (+386)</option>
                      <option value="+677">Solomon Islands (+677)</option>
                      <option value="+252">Somalia (+252)</option>
                      <option value="+27">South Africa (+27)</option>
                      <option value="+82">South Korea (+82)</option>
                      <option value="+34">Spain (+34)</option>
                      <option value="+94">Sri Lanka (+94)</option>
                      <option value="+249">Sudan (+249)</option>
                      <option value="+597">Suriname (+597)</option>
                      <option value="+268">Swaziland (+268)</option>
                      <option value="+46">Sweden (+46)</option>
                      <option value="+41">Switzerland (+41)</option>
                      <option value="+963">Syria (+963)</option>
                      <option value="+886">Taiwan (+886)</option>
                      <option value="+992">Tajikistan (+992)</option>
                      <option value="+255">Tanzania (+255)</option>
                      <option value="+66">Thailand (+66)</option>
                      <option value="+228">Togo (+228)</option>
                      <option value="+690">Tokelau (+690)</option>
                      <option value="+676">Tonga (+676)</option>
                      <option value="+1">Trinidad and Tobago (+1)</option>
                      <option value="+216">Tunisia (+216)</option>
                      <option value="+90">Turkey (+90)</option>
                      <option value="+993">Turkmenistan (+993)</option>
                      <option value="+1">Turks and Caicos Islands (+1)</option>
                      <option value="+688">Tuvalu (+688)</option>
                      <option value="+1">U.S. Virgin Islands (+1)</option>
                      <option value="+256">Uganda (+256)</option>
                      <option value="+380">Ukraine (+380)</option>
                      <option value="+971">United Arab Emirates (+971)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+598">Uruguay (+598)</option>
                      <option value="+998">Uzbekistan (+998)</option>
                      <option value="+678">Vanuatu (+678)</option>
                      <option value="+379">Vatican City (+379)</option>
                      <option value="+58">Venezuela (+58)</option>
                      <option value="+84">Vietnam (+84)</option>
                      <option value="+681">Wallis and Futuna (+681)</option>
                      <option value="+967">Yemen (+967)</option>
                      <option value="+260">Zambia (+260)</option>
                      <option value="+263">Zimbabwe (+263)</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Phone"
                      className={`border-t border-b border-r border-gray-300 rounded-r-md p-2 w-2/3 lg:w-3/4 ${
                        errors.phone && "border-red-500"
                      }`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.country && "border-red-500"
                    }`}
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs">{errors.country}</p>
                  )}
                  <input
                    type="text"
                    placeholder="City"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.city && "border-red-500"
                    }`}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Division"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.division && "border-red-500"
                    }`}
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                  />
                  {errors.division && (
                    <p className="text-red-500 text-xs">{errors.division}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Zip code"
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      errors.zipCode && "border-red-500"
                    }`}
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs">{errors.zipCode}</p>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Occupation"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    errors.occupation && "border-red-500"
                  }`}
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
                {errors.occupation && (
                  <p className="text-red-500 text-xs">{errors.occupation}</p>
                )}
                <input
                  type="text"
                  placeholder="Company"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    errors.company && "border-red-500"
                  }`}
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs">{errors.company}</p>
                )}
                <input
                  type="text"
                  placeholder="Company location"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    errors.companyLocation && "border-red-500"
                  }`}
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                />
                {errors.companyLocation && (
                  <p className="text-red-500 text-xs">
                    {errors.companyLocation}
                  </p>
                )}
                <textarea
                  placeholder="About me"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    errors.aboutMe && "border-red-500"
                  }`}
                  name="aboutMe"
                  value={formData.aboutMe}
                  onChange={handleChange}
                />
                {errors.aboutMe && (
                  <p className="text-red-500 text-xs">{errors.aboutMe}</p>
                )}
              </form>
            </div>
          </div>

          {/* Email and Password Section */}
          <div
            ref={emailPasswordRef}
            className="bg-white rounded-lg shadow-md p-6 lg:p-8 mt-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2
                style={{ color: "var(--color-primaryText)" }}
                className="text-xl font-bold "
              >
                Email and password
              </h2>
              <button
                style={{
                  backgroundColor: "var(--color-primaryBlue)",
                  borderRadius: "0.5rem",
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center space-x-2"
                onClick={handleSavePassword}
              >
                <SaveIcon className="w-5 h-5" />
                <span>Save password</span>
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="New password"
                className="border border-gray-300 rounded-md p-2 w-full"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="border border-gray-300 rounded-md p-2 w-full"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
