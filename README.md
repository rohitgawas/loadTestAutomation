ReadMe.md

Getting started :

Installtion of K6 tool :
 k6 has packages for Linux, Mac, and Windows. Alternatively, you can use a Docker container or a standalone binary.
For windows :
If you use the Chocolatey package manager you can install the unofficial k6 package with:
choco install k6
If you use the Windows Package Manager, install the official packages from the k6 manifests (created by the community):
winget install k6 --source winget

Alternatively, you can download and run the latest official installer(https://dl.k6.io/msi/k6-latest-amd64.msi).

Test Scenario :

Test scenario is to perform load testing on amazon website.
Here we will do a setup where 1000 vertual users will try to access amazon website homepage for the duration of 15 seconds.
We are suppose to measure webpage response before load testing and during load testing.


Folder structure :
Folder structure in repository is as follows :

    -loadTestAutomation
      -LoadTest(Parent folder)
        -loadTest.js
        -options.js
        - utilities.js
        -testSummuryReport.html
      -package.json

1.	loadTest.js has the main test script. 
2.	Options.js has the setup values for the tests
3.	Utilities.js has the common function used
4.	Package.json has the dependency package information
5.	testSummuryReport.html contains the latest test run report

To run the test :
Open terminal . Go to loadTest folder. Run following command :

k6 run loadTest.js

This will run the test in headless mode and generate the results. Reports can be accessible in testSummuryReport.html file.






