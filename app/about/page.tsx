import React from "react";

export default function page() {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen">
        <div>
          <h1 className="text-[32px] md:text-[80px] font-bold mb-2">
            Challenges
          </h1>
        </div>
        <div className="flex justify-end w-full md:w-1/2 text-lg md:text-2xl items-center mt-10 md:mt-0">
          <p className="text-lg">
            Almost all of the Network Traffic Datasets are highly comprehensive
            and bulky i.e. they have very high number of dimensions which in
            turn makes it computationally complex and time consuming to process
            the datasets.
            <br />
            <br /> The Datasets are not balanced which makes the Models Bias
            towards a certain class which leads to inaccurate predictions.
            <br />
            <br />
            There is no simple UI/UX Available, also the current systems are
            complex which leads to making it difficult for the user.
            <br />
            <br /> There are many state of the art frameworks available but
            there is no framework yet that provides us the best & reliable
            results.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen">
        {" "}
        <div>
          <h1 className="text-[32px] md:text-[80px] font-bold mb-2">
            Project Objectives
          </h1>
        </div>
        <div className="flex justify-end w-full md:w-1/2 text-lg md:text-2xl items-center mt-10 md:mt-0">
          <p className="text-lg">
            This research aims to reduce the Dimensions of the Data to make the
            entire process of analyzing the Network Traffic Flow computationally
            efficient.
            <br />
            <br /> Proposed a metaheuristic-based feature selection framework by
            using shap, BGWO and PSO techniques.
            <br />
            <br />
            To efficiently analyze data in IoT networks, we use models like
            Decision Tree (DT), AdaBoost (AB), Random Forest (RF), Convolutional
            Neural Network (CNN), Bidirectional Long Short-Term Memory(BiLSTM),
            and Hybrid Deep Convolutional Neural Network Bidirectional Long
            Short-Term Memory to find cyber threats. These models help us make
            fast decisions to spot and tackle cyber threats in IoT networks.
            <br />
            <br /> The performance of our cyber-threat detection framework is
            assessed using the Bot-IoT dataset. We evaluate the number of
            selected features, accuracy (ACC), detection rate (DR), precision
            (PR),f1 score and false positive rate (FPR) for the same
            experimental scenarios.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen">
        {" "}
        <div>
          <h1 className="text-[32px] md:text-[80px] font-bold mb-2">
            Solution Proposed
          </h1>
        </div>
        <div className="flex justify-end w-full md:w-1/2 text-lg md:text-2xl items-center mt-10 md:mt-0">
          <p className="text-lg">
            This Research provides a Metaheuristic Feature Selection Framework
            which first employs SHAP which is an Explainable AI Algorithm.
            <br />
            <br /> The Selected Feature Subset is then passed to BGWO & PSO
            independently through which we get two feature subsets Feature
            Subset 2 & Feature Subset 3.
            <br />
            <br />
            These Selected Feature Subsets are then evaluated independently
            using various Machine Learning & Deep Learning Models.
            <br />
            <br /> This Framework supersedes all the other Frameworks and
            provides the Best Results which are described in Brief in the
            Results Section.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen">
        {" "}
        <div>
          <h1 className="text-[32px] md:text-[80px] font-bold mb-2">
            Tech Stack
          </h1>
        </div>
        <div className="flex justify-end w-full md:w-1/2 text-lg md:text-2xl items-center mt-10 md:mt-0">
          <p className="text-lg">
            The proposed model is implemented using Google Colab, which provides
            cloud-based computer resources in addition to collaborative coding
            features. By utilizing high-performance computing capabilities and
            collaborating on code with others, Google Colab removes the need for
            expensive hardware infrastructure purchases.
            <br />
            <br />
            We have allocated 20 GB of RAM and 250 GB of storage space for our
            project. This gave us the ability to quickly complete tasks
            requiring a lot of resources, which sped up development.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-60 h-screen">
        <div>
          <h1 className="text-[32px] md:text-[80px] font-bold mb-2">
            Algorithms Used
          </h1>
        </div>
        <div className="flex justify-between w-full md:w-1/2 text-lg md:text-2xl items-center mt-10 md:mt-0">
          <p className="text-lg">
            <div className="flex flex-col md:flex-row justify-between md:gap-[120px]">
              <div className="p-2 rounded-md">
                <h1 className="font-extrabold">Machine Learning Models</h1>
                <ul className="mt-3.5">
                  <li>Decision Tree</li>
                  <li>Random Forest</li>
                  <li>Logistic Regression</li>
                  <li>Ada-Boost</li>
                  <li>XG-Boost</li>
                  <li>SVM</li>
                  <li>KNN</li>
                </ul>
              </div>
              <div className="p-2 rounded-md">
                <h1 className="font-extrabold">Deep Learning Models</h1>
                <ul className="mt-3.5">
                  <li>CNN</li>
                  <li>Bi-LSTM</li>
                  <li>DCNN-Bi-LSTM</li>
                </ul>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
