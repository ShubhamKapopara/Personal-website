#!/bin/bash

# Script to download images from GitHub repository for Employee Attrition project
# Run this script from the project root directory

PROJECT_DIR="public/images/projects/employee-attrition"
GITHUB_REPO="https://raw.githubusercontent.com/ShubhamKapopara/Employee-Attrition-Workforce-Analytics/main/assets"

# Create directory if it doesn't exist
mkdir -p "$PROJECT_DIR"

# Download images
echo "Downloading images from GitHub..."

curl -L "${GITHUB_REPO}/powerBI_preview%20copy.png" -o "${PROJECT_DIR}/powerbi-dashboard.png"
curl -L "${GITHUB_REPO}/tableau_snapshot.png" -o "${PROJECT_DIR}/tableau-dashboard.png"
curl -L "${GITHUB_REPO}/excel_snapshot.png" -o "${PROJECT_DIR}/excel-dashboard.png"
curl -L "${GITHUB_REPO}/test_doc_powerBI.png" -o "${PROJECT_DIR}/sql-queries.png"

echo "Images downloaded successfully!"
echo "Check the ${PROJECT_DIR} directory"

