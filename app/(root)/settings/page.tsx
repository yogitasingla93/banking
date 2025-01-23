"use client"
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import shadcn tabs
import HeaderBox from "@/components/HeaderBox";

// Dummy API
const mockFetchUserData = async () => ({
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  dob: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "New York",
  postalCode: "45962",
  country: "USA",
});

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("editProfile");
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await mockFetchUserData();
      setUserData(data);
      setFormData({ ...formData, ...data });
    };
    fetchUserData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Saved:", formData);
      alert("Profile updated successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
  };

  return (
    <div>
    <header className='home-header header-main'>
        <HeaderBox title="Settings" />           
      </header>
    <div className="flex-1 mx-auto p-6 bg-dash">
      <div className="bg-white rounded-lg p-10">
      <Tabs defaultValue="editProfile" className="w-full">
        {/* Tabs */}
        <TabsList className="mb-6 flex gap-4 border-b">
          <TabsTrigger
            value="editProfile"
            className={`pb-2 ${
              activeTab === "editProfile" ? "text-black font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("editProfile")}
          >
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="preference"
            className={`pb-2 ${
              activeTab === "preference" ? "text-black font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("preference")}
          >
            Preference
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className={`pb-2 ${
              activeTab === "security" ? "text-black font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="editProfile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Picture */}
            <div className="text-center relative w-32 h-32 mx-auto">
                  <img
                    src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : "/icons/charlene.jpg"}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-2"
                  />
                  <label
                    htmlFor="profilePicture"
                    className="absolute bottom-2 right-2 bg-blue-500 p-0 rounded-full cursor-pointer"
                  >
                    <img src="/icons/edit.png" alt="edit" className="w-6 h-6 text-white" />
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                  />
                </div>

            {/* Form Fields Column 1 */}
            <div>
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Username", name: "username", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Date of Birth", name: "dob", type: "date" },
              ].map(({ label, name, type }) => (
                <div key={name} className="mb-4">
                  <label className="block font-medium mb-1 text-gray-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-sm">{errors[name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Form Fields Column 2 */}
            <div>
              {[
                { label: "Present Address", name: "presentAddress", type: "text" },
                { label: "Permanent Address", name: "permanentAddress", type: "text" },
                { label: "City", name: "city", type: "text" },
                { label: "Postal Code", name: "postalCode", type: "text" },
                { label: "Country", name: "country", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name} className="mb-4">
                  <label className="block font-medium mb-1 text-gray-1">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-sm">{errors[name]}</p>
                  )}
                </div>
              ))}
              {/* Save Button */}
              <button
                className="mt-4 bg-gray-1 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 w-full"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preference">
          <p>Preference settings coming soon...</p>
        </TabsContent>

        <TabsContent value="security">
          <p>Security settings coming soon...</p>
        </TabsContent>
      </Tabs>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
