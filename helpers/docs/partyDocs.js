/**
 * @swagger
 * tags:
 *   name: Party
 *   description: Party management endpoints
 */

/**
 * @swagger
 * /api/v1/party/{id}:
 *   get:
 *     summary: Get a specific party by ID
 *     tags: [Party]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Party ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Party retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   properties:
 *                     party:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "60d9f15392b8b90f3f021c7d"
 *                           title:
 *                             type: string
 *                             example: "Birthday Bash"
 *                           description:
 *                             type: string
 *                             example: "A fun birthday party!"
 *                           privacy:
 *                             type: boolean
 *                             example: false
 *       400:
 *         description: Invalid request (e.g., party not found)
 */

/**
 * @swagger
 * /api/v1/party:
 *   post:
 *     summary: Create a new party
 *     tags: [Party]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - partyDate
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Year's Eve Party"
 *               description:
 *                 type: string
 *                 example: "Celebrate the new year with friends!"
 *               partyDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-31"
 *               privacy:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       200:
 *         description: Party created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   properties:
 *                     party:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         partyDate:
 *                           type: string
 *                         privacy:
 *                           type: boolean
 *       400:
 *         description: Missing required fields or invalid input
 */

/**
 * @swagger
 * /api/v1/party:
 *   get:
 *     summary: Get all public parties
 *     tags: [Party]
 *     responses:
 *       200:
 *         description: List of public parties
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "60d9f15392b8b90f3f021c7d"
 *                       title:
 *                         type: string
 *                         example: "Music Festival"
 *                       description:
 *                         type: string
 *                         example: "A fun music festival!"
 *                       privacy:
 *                         type: boolean
 *                         example: false
 *       400:
 *         description: Error fetching parties
 */

/**
 * @swagger
 * /api/v1/party/byUser:
 *   get:
 *     summary: Get all parties created by the logged-in user
 *     tags: [Party]
 *     responses:
 *       200:
 *         description: List of parties created by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "60d9f15392b8b90f3f021c7d"
 *                       title:
 *                         type: string
 *                         example: "John's Birthday Party"
 *                       description:
 *                         type: string
 *                         example: "A celebration of John's life!"
 *                       privacy:
 *                         type: boolean
 *                         example: false
 *       400:
 *         description: Error fetching user's parties
 */

/**
 * @swagger
 * /api/v1/party:
 *   put:
 *     summary: Update an existing party
 *     tags: [Party]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - partyId
 *               - title
 *               - description
 *               - partyDate
 *             properties:
 *               partyId:
 *                 type: string
 *                 example: "60d9f15392b8b90f3f021c7d"
 *               title:
 *                 type: string
 *                 example: "Updated Party Title"
 *               description:
 *                 type: string
 *                 example: "Updated party description."
 *               partyDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-31"
 *               privacy:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Party updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   properties:
 *                     party:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         partyDate:
 *                           type: string
 *                         privacy:
 *                           type: boolean
 *       400:
 *         description: Invalid request (e.g., missing fields or wrong user)
 */

/**
 * @swagger
 * /api/v1/party/{id}:
 *   delete:
 *     summary: Delete a party by ID
 *     tags: [Party]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Party ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       202:
 *         description: Party deleted successfully
 *       400:
 *         description: Error deleting party
 *       404:
 *         description: Party not found
 *       500:
 *         description: Internal server error
 */
